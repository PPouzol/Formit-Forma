import { useEffect, useState } from "react";
import fetchResultObj from "../common/interfaces";
import FormaService from "../services/forma.service";
import ProjectList from "./projects/project-list.component";
import Project from "./projects/project"
import Proposal from "./proposals/proposal"
import FormitFormaService from "../services/formit-forma.service";
import { noop } from "lodash-es";

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
        setMessageType("info");
        setMessage("");
        let workspaces = results.map((e: any) => {
          var filledObj = new fetchResultObj()
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
        .map(async (e: any) => {
          var filledObj = new Project()
          filledObj.Fill(e.id, e.name, e.version, e.metadata);
          let nowTime = new Date().getTime();
          let creationTimeDiff = nowTime - e.created;
          let dayCount = Math.floor(creationTimeDiff / (1000*24*60*60));
          filledObj.creationTime = dayCount == 0 ? `Today` : `${dayCount} days ago`;

          await FormaService.countProposals(filledObj.projectId)
            .then( (count) => {
              filledObj.proposalCount = count;
            });

          return filledObj;
        });

      let projects = await Promise.all(projectsResults)

      setProjects(projects);
      setMessageType("info");
      setMessage("");
    } catch (error) {
      const errorTxt = "Unable to read projects from selected workspace";
      setMessageType("error");
      setMessage(errorTxt);
      throw new Error(errorTxt);
    }
  }

  async function fillProposals(projectId) {
    try {
      setMessageType("info");
      setMessage("Fetching proposals...");
      let projectProposals: Proposal[];

      await FormaService.getProposals(projectId)
        .then( (proposals) => {
            projectProposals = proposals.map((e: any) => {
            var proposal = new Proposal()
            const split = e.urn.split(":");
            let id = split[split.length - 2];
            let revision = split[split.length - 1];
            let name = e.properties.name;
            proposal.Fill(id, name, revision, e.metadata, e.urn);
            let creationDate = new Date(e.metadata.createdAt);              
            let hour = creationDate.getHours();
            let minutes = creationDate.getMinutes();
            if(creationDate.getDate() === new Date().getDate())
            {
              proposal.creationDate = `Today ${hour}:${minutes} ${hour < 12 ? "AM" : "PM"}`;
            }
            else
            {
              proposal.creationDate = `${creationDate.toLocaleString()}`;
            }
            proposal.projectId = projectId;
            return proposal;
          });
          projectProposals.sort(function(proposalA,proposalB){
            return new Date(proposalA.metadata.createdAt).getTime() - new Date(proposalB.metadata.createdAt).getTime();
          });
        });

      projects.forEach(project => {
        if(project.projectId === projectId)
        {
          project.proposals = projectProposals;
          
          if(projectProposals.length > 0)
          {
            project.newestProposalId = project.proposals[0].id;
            project.urn = project.proposals[0].urn;
          }
          project.proposalsListContainer = `project-${project.projectId}-proposals-list`
        }
      });

      setProjects(projects);
      setMessageType("info");
      setMessage("");
    } catch (error) {
      const errorTxt = "Unable to read proposals from projects";
      setMessageType("error");
      setMessage(errorTxt);
      throw new Error(errorTxt);
    }
  }

  function fillWorkspaceProjects(workspaceId) {
    setMessageType("info");
    setMessage("Fetching projects...");

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

  async function setSelectedProposalId(newProposalId)
  {
    setCurrentProposalId(newProposalId);
    const hasSomethingToSave = await FormIt.Model.IsModified();
    const idsProvided = projectId !== "" && newProposalId !== "";
    let syncButton = document.getElementById("sync-btn");
    if(syncButton !== null)
    {
      (syncButton as HTMLButtonElement).disabled = !hasSomethingToSave || !idsProvided;
      if(syncButton.onclick === noop || !syncButton.onclick)
      {
        syncButton.onclick = onSyncClick;
      }
    }     
  }

  function onSyncClick() {
    let container = document.getElementById("projectlist-container");
    container.classList.add('disabled');
    let message = document.getElementById("message");
    message.className = "info";
    message.textContent = "Sending datas to Forma...";
    FormitFormaService.save(
      {
        projectId,
        proposalId
      }, 
      (success) => {
        setMessageType(success ? "success" : "error");
        setMessage(success ? "Datas have been synchronized successfully on Forma" : "Synchronization failed");
        container.classList.remove('disabled');
      }
    );
  }

  function selectProject(projectId) {
    projects.forEach(project => {
      if(project.projectId === projectId)
      {
        if(!project.proposals)
        {
          fillProposals(projectId);
        }
      }
    });
    setCurrentProjectId(projectId);
  }

  const [statusMessage, setMessage] = useState("")
  const [statusType, setMessageType] = useState("info")
  // workspaces
  const [workspaces, setWorkspaces] = useState<fetchResultObj[]>()
  // projects
  const [projectId, setCurrentProjectId] = useState("")
  const [projects, setProjects] = useState<Project[]>()
  // proposals
  const [proposalId, setCurrentProposalId] = useState("")

  // get workspaces from API
  useEffect(() => {
    setMessage("Fetching worskpaces...");
    handleFetchValues(FormaService.getWorkspaces(), 
          handleWorkspacesFetchedValues.bind(this));
  }, [])

	return (
    <div id="FormaControls" className="col-md-12">
      <div id="plugin-container" className="plugin">
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
          projectSelectionHandler={selectProject}
          proposalSelectionHandler={setSelectedProposalId}
          selectedProjectId={projectId}
          selectedProposalId={proposalId}>
        </ProjectList>
        <div id="action">
          <button className="st" id="sync-btn" disabled>Sync</button>  
          <label id="message" className={statusType}>{statusMessage}</label>   
        </div>
      </div>
    </div>
	);
}

export default FormitForma
