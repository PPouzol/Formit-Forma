import { useEffect, useState } from "react";
import { ElementResponse } from "@spacemakerai/element-types"
import fetchResultObj from "../common/interfaces";
import FormaService from "../services/forma.service";
import ProjectList from "./projects/project-list.component";
import Project from "./projects/project"
import Proposal from "./proposals/proposal"
import FormitFormaService from "../services/formit-forma.service";
import { retrieveProposalElements } from "../helpers/saveUtils"
import useLoadConceptualWebWorker from "../helpers/useLoadConceptualWebWorker"
import { useGlobalState } from "../helpers/stateUtils"

function FormitForma() {  
  function handleFetchValues(fetchFunction: Promise<any>, handleResults: (value: any) => any | null | undefined)  {
    fetchFunction
      .then(handleResults)
      .catch(error => console.log(error));
  }

  function handleWorkspacesFetchedValues(results: any) {
    try {
      let haveValues = results !== null && (results as Array<any>).length > 0;
      document.getElementById("message")!.style.display = haveValues ? "block" : "none";
      if(haveValues)
      {
        if(!synced) {
          setMessageType("info");
          setMessage("");
        }
        let workspaces = results.map((e: any) => {
          var filledObj = new fetchResultObj();
          filledObj.Fill(e.id, e.name, e.version, e.metadata, e.urn);
          return filledObj;
        });
        setWorkspaces(workspaces)
        if(workspaces.length > 0)
        {
          fillWorkspaceProjects(workspaces[0].id);
        }
      }
    } catch (error) {
      const errorTxt = "Unable to read workspaces";
      setMessageType("error");
      setMessage(errorTxt);
      throw new Error(errorTxt);
    }
  }
  
  async function handleProjectsFetchedValues(results: any) {
    try {
      let projectsResults = results
        .filter((e: any) => {
          return e.metadata !== null && !e.metadata.isDraft && e.version !== 1
        })
        .map((e: any) => {
          var filledObj = new Project()
          filledObj.Fill(e.id, e.name, e.version, e.metadata);
          let nowTime = new Date().getTime();
          let creationTimeDiff = nowTime - e.created;
          let dayCount = Math.floor(creationTimeDiff / (1000*24*60*60));
          filledObj.creationTime = dayCount == 0 ? `Today` : `${dayCount} days ago`;
          return filledObj;
        });

      await fillProposals(projectsResults);
      if(!synced) {
        setMessageType("info");
        setMessage("");
      }
    } catch (error) {
      const errorTxt = "Unable to read projects from selected workspace";
      setMessageType("error");
      setMessage(errorTxt);
      throw new Error(errorTxt);
    }
  }

  async function fillProposals(projectsResults) {
    try {
      for(const project of projectsResults) {
        await FormaService.getProposals(project.projectId)
          .then( (proposals) => {
            project.proposals = proposals.map((e: any) => {
              var proposalEntry = new Proposal()
              const split = e.urn.split(":");
              let id = split[split.length - 2];
              let revision = split[split.length - 1];
              let name = e.properties.name;
              proposalEntry.Fill(id, name, revision, e.metadata, e.urn);
              let creationDate = new Date(e.metadata.createdAt);              
              let hour = creationDate.getHours();
              let minutes = creationDate.getMinutes();
              if(creationDate.getDate() === new Date().getDate())
              {
                proposalEntry.creationDate = `Today ${hour}:${minutes} ${hour < 12 ? "AM" : "PM"}`;
              }
              else
              {
                proposalEntry.creationDate = `${creationDate.toLocaleString()}`;
              }
              proposalEntry.projectId = project.projectId;
              
              if(proposal)
              {
                if(proposal.id === proposalEntry.id)
                {
                  // currently selected proposal match this entry. 
                  // should be updated to get last urn with revision
                  setCurrentProposal(proposalEntry);
                            
                  if(synced)
                  {
                    retrieveProposalElements(project.projectId, proposal.proposalId)
                      .then((proposalElement) => {
                        const elementResponseMap: ElementResponse = {
                          [proposalElement.urn]: proposalElement
                        }

                        setElements(elementResponseMap)
                      })
                  }
                }
              }
                            
              return proposalEntry;
            });
            project.proposals.sort(function(proposalA,proposalB){
              return new Date(proposalA.metadata.createdAt).getTime() - new Date(proposalB.metadata.createdAt).getTime();
            });
            if(project.proposals.length > 0)
            {
              project.newestProposalId = project.proposals[0].id;
              project.urn = project.proposals[0].urn;
              project.proposalCount = project.proposals.length;
            }
            project.proposalsListContainer = `project-${project.projectId}-proposals-list`
          });
        }
        setProjects(projectsResults);

        if(!synced) {
          setMessageType("info");
          setMessage("");
        }
        else {
          setSync(false);
        }
    } catch (error) {
      const errorTxt = "Unable to read proposals from projects";
      setMessageType("error");
      setMessage(errorTxt);
      throw new Error(errorTxt);
    }
  }

  function fillWorkspaceProjects(workspaceId) {
    handleFetchValues(FormaService.getProjects(workspaceId), 
      handleProjectsFetchedValues.bind(this));
  }

  function handleWorkspaceSelectChange()  {
    let workspaceSelect = (document.getElementById("workspace-select")) as HTMLSelectElement;
    if(workspaceSelect !== null)
    {
      fillWorkspaceProjects(workspaceSelect.value);
    }
  }

  async function setSelectedProjectId(newProjectId) {
    if(project !== null && project?.projectId === newProjectId) {
      setCurrentProject(null);
      setCurrentProposal(null);
    }
    else {
      let matchingProject = projects?.filter((e: any) => {
        return e.projectId == newProjectId;
      });
      if(matchingProject !== null) {
        setCurrentProject(matchingProject[0]);
      }
      else {
        setCurrentProject(null);
      }
    }
    updateButtonsState("");
  }

  async function setSelectedProposalId(newProposalId) {
    if(proposal !== null && proposal?.proposalId === newProposalId) {
      setCurrentProposal(null);
      newProposalId = "";
    }
    else {
      if(project !== null) {
        let matchingProposal = project.proposals.filter((e: any) => {
          return e.proposalId == newProposalId;
        });
        if(matchingProposal !== null && matchingProposal.length > 0) {
          setCurrentProposal(matchingProposal[0]);

          retrieveProposalElements(project.projectId, matchingProposal[0].proposalId)
            .then((proposalElement) => {
              const elementResponseMap: ElementResponse = {
                 [proposalElement.urn]: proposalElement
              }

              setElements(elementResponseMap)
            })
        }
        else {
          setCurrentProposal(null);
        }
      }
      else {
        setCurrentProposal(null);
      }
    }
    updateButtonsState(newProposalId);
  }

  async function updateButtonsState(proposalId) {
    const hasSomethingToSave = await FormIt.Model.IsModified();
    const idsProvided = project !== null && project?.projectId !== "" && proposalId !== "";
    let syncButton = document.getElementById("sync-btn");
    let loadButton = document.getElementById("load-btn");
    if(syncButton !== null)
    {
      (syncButton as HTMLButtonElement).disabled = !hasSomethingToSave || !idsProvided;
    }   
    
    if(loadButton !== null)
    {
      (loadButton as HTMLButtonElement).disabled = !idsProvided;
    }   
  }

  async function onLoadClick() {
    let container = document.getElementById("projectlist-container");
    container.classList.add('disabled');
    let message = document.getElementById("message");
    message.className = "info";
    message.textContent = "Loading datas from Forma...";
    
    // to be reactived if we want to offer possibility to save current edits locally
    // let hasSomethingToSave = await FormIt.Model.IsModified();
    // if(hasSomethingToSave)
    // {
    //   // start new sketch, to prevent opening several project at once
    //   FormIt.NewFile();
    //   hasSomethingToSave = await FormIt.Model.IsModified();
    //   if(hasSomethingToSave)
    //   {
    //     // user has cancelled or new file has failed, cancel loading and display an error
    //     setMessageType("info");
    //     setMessage("Loading cancelled");
    //     container.classList.remove('disabled');
    //     return;
    //   }
    // }
    
    FormIt.NewFile(true);

    useLoadConceptualWebWorker(proposal.projectId, proposal.proposalId);

    FormitFormaService.fetchAndLoadElements(
      [],
      proposal,
      (success) => {
        setMessageType(success ? "success" : "error");
        setMessage(success ? "Datas have been loaded from Forma" : "Loading failed");
        container.classList.remove('disabled');
      }
    );
  }

  function onSyncClick() {
    let container = document.getElementById("projectlist-container");
    container.classList.add('disabled');
    let message = document.getElementById("message");
    message.className = "info";
    message.textContent = "Sending datas to Forma...";
    let projectId = project.projectId;

    FormitFormaService.save(
      {
        projectId,
        proposal,
        elementResponseMap,
        terrainElevationTransf3d
      }, 
      (success) => {
        setSync(true);
        setMessageType(success ? "success" : "error");
        setMessage(success ? "Datas have been synchronized successfully on Forma" : "Synchronization failed");
        container.classList.remove('disabled');
      }
    );
  }

  const [statusMessage, setMessage] = useState("")
  const [statusType, setMessageType] = useState("info")
  // workspaces
  const [workspaces, setWorkspaces] = useState<fetchResultObj[]>()
  // projects
  const [project, setCurrentProject] = useState<Project>(null)
  const [projects, setProjects] = useState<Project[]>()
  // proposals
  const [proposal, setCurrentProposal] = useState<Proposal>(null)
  // elements
  const [elementResponseMap, setElements] = useState<ElementResponse>({})
  const [synced, setSync] = useState(false)

  const [terrainElevationTransf3d] = useGlobalState("terrainElevationTransf3d");
  
  useEffect(() => {
    // on start, disable the button. 
    // this must be done here, as adding disabled to the default return will prevent binding onSyncClick
    let syncButton = document.getElementById("sync-btn");
    if(syncButton !== null)
    {
      (syncButton as HTMLButtonElement).disabled = true;
    }   
    let loadButton = document.getElementById("load-btn");
    if(loadButton !== null)
    {
      (loadButton as HTMLButtonElement).disabled = true;
    }  
  }, [])

  // get workspaces from API
  useEffect(() => {
    handleFetchValues(FormaService.getWorkspaces(), 
          handleWorkspacesFetchedValues.bind(this));
  }, [synced])

	return (
    <div id="FormaControls" className="col-md-12">
      <div className="plugin plugin-container">
        <h3 id="identifier">Welcome to Formit-Forma plugin</h3>
        <select id="workspace-select" 
            className="fetchSelect" 
            onChange={handleWorkspaceSelectChange.bind(this)}
            defaultValue={""}
            hidden
          >
            { 
              workspaces?.map(({ id, name }) => (
                <option value={id} key={id}>{name}</option>
              ))
            }
        </select>
        <ProjectList 
          projects={projects}
          projectSelectionHandler={setSelectedProjectId}
          proposalSelectionHandler={setSelectedProposalId}
          selectedProjectId={project?.projectId}
          selectedProposalId={proposal?.proposalId}>
        </ProjectList>
        <div id="action">
          <button className="st" id="load-btn" onClick={onLoadClick}>Load</button> 
          <button className="st" id="clear-btn" disabled>Clear</button> 
          <button className="st" id="sync-btn" onClick={onSyncClick}>Sync</button>  
          <label id="message" className={statusType}>{statusMessage}</label>   
        </div>
      </div>
    </div>
	);
}

export default FormitForma