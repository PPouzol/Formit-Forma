import reactWcWrapper from "@spacemakerai/react-wc-wrapper"
import { Component } from "react";
import fetchResultObj from "../common/interfaces";
import FormaService from "../services/forma.service";
import FormitFormaService from "../services/formit-forma.service";
import { deleteCacheForKey } from "../helpers/cacheUtils"

type Props = {};

type State = {
  workspaceId: any,
  projectId: any,
  proposalId: any,
}

export default class FormitForma extends Component<Props, State> {  
  constructor(props: Props) {
    super(props);
    this.setStatus(true, false, "Fetching worskpaces...");
    this.handleFetchValues(FormaService.getWorkspaces(), 
          this.handleWorkspacesFetchedValues.bind(this));
  }

  handleFetchValues(fetchFunction: Promise<any>, handleResults: (value: any) => any | null | undefined)  {
    fetchFunction
      .then(handleResults)
      .catch(error => console.log(error));
  }

  fillSelectOptions(results: fetchResultObj[], selectName: string, listener: (this: HTMLSelectElement, ev: Event) => any)
  {
    let select = (document.getElementById(selectName) as HTMLSelectElement);
    if(select !== null)
    {
      for (const result of results) {
        const option = document.createElement('option');
        option.value = result.id;
        option.innerHTML = result.name;
        select.appendChild(option);
      }
      select.disabled = false;
      select!.addEventListener('change', listener);        
    }
    this.setStatus(true, false, "");
  }
  
  handleWorkspacesFetchedValues(results: any) {
    try {
      let haveValues = results !== null && (results as Array<any>).length > 0;
      document.getElementById("message")!.style.display = haveValues ? "block" : "none";
      if(haveValues)
      {
        let workspaces = results.map((e: any) => {
          var filledObj = new fetchResultObj()
          filledObj.Fill(e.id, e.name, e.version, e.metadata);
          return filledObj;
        });
        this.fillSelectOptions(workspaces, "workspace-select", this.handleWorkspaceSelectChange.bind(this));
          this.handleWorkspaceSelectChange();
      }
    } catch (error) {
      const errorTxt = "Unable to read workspaces";
      this.setStatus(false, false, errorTxt);
      throw new Error(errorTxt);
    }
  }
  
  handleProjectsFetchedValues(results: any) {
    try {
      let projects = results
      .map((e: any) => {
        var filledObj = new fetchResultObj()
        filledObj.Fill(e.id, e.name, e.version, e.metadata);
        return filledObj;
      })
      .filter((e: any) => {
        return e.metadata !== null && !e.metadata.isDraft && e.version !== 1
      });
      this.fillSelectOptions(projects, "project-select", this.handleProjectSelectChange.bind(this));
    } catch (error) {
      const errorTxt = "Unable to read projects from selected workspace";
      this.setStatus(false, false, errorTxt);
      throw new Error(errorTxt);
    }
  }
  
  handleProposalsFetchedValues(results: any) {
    try {
      if(results.data !== null)
      {
        let proposals = results.map((e: any) => {
          var filledObj = new fetchResultObj()
          const split = e.urn.split(":");
          let id = split[split.length - 2];
          let revision = split[split.length - 1];
          let name = e.properties.name;
          filledObj.Fill(id, name, revision, e.metadata);
          return filledObj;
        });
        this.fillSelectOptions(proposals, "proposal-select", this.handleProposalSelectChange.bind(this));
      }
    } catch (error) {
      const errorTxt = "Unable to read proposals from selected project";
      this.setStatus(false, false, errorTxt);
      throw new Error(errorTxt);
    }
  }

  handleWorkspaceSelectChange()  {
    let workspaces = (document.getElementById("workspace-select")) as HTMLSelectElement;
    this.state = {
      workspaceId: workspaces.value,
      projectId: "",
      proposalId: ""
    };      
    this.setStatus(true, false, "Fetching projects...");
    this.handleFetchValues(FormaService.getProjects(this.state.workspaceId), 
      this.handleProjectsFetchedValues.bind(this));
  }
  
  handleProjectSelectChange()  {
    let projects = (document.getElementById("project-select")) as HTMLSelectElement;
    if(projects.selectedIndex !== 0)
    {
      this.state = {
        workspaceId: this.state.workspaceId,
        projectId: projects.value,
        proposalId: ""
      };      
      this.setStatus(true, false, "Fetching proposals...");
      this.handleFetchValues(FormaService.getProposals(this.state.projectId), 
        this.handleProposalsFetchedValues.bind(this));
    }
  }
  
  handleProposalSelectChange() {
    let proposals = (document.getElementById("proposal-select")) as HTMLSelectElement;
    if(proposals.selectedIndex !== 0)
    {
      this.state = {
        workspaceId: this.state.workspaceId,
        projectId: this.state.projectId,
        proposalId: proposals.value
      };
      let loadButton = document.getElementById("load-btn");
      if(loadButton !== null)
      {
        let proposalId = proposals.value;
        (loadButton as HTMLButtonElement).disabled = false;
        loadButton.onclick = async () => {
          let projectId = this.state.projectId;

          // fetch terrain 
          await FormitFormaService.fetchAndLoadElements(
            projectId,
            proposalId,
            undefined,
            [],
            () => {
              this.enableSyncFunction(proposalId)
            }
          );

          /*FormitFormaService.getElementsAndSaveCache(
            projectId,
            proposalId,
            async () => {
              debugger
              // fetch terrain 
              await FormitFormaService.fetchAndLoadElements(
                projectId,
                proposalId,
                undefined,
                [],
                () => {
                  this.enableSyncFunction(proposalId)
                }
              );
            }
          )*/
        };

        let clearButton = document.getElementById("clear-btn");
        (clearButton as HTMLButtonElement).disabled = false;
        clearButton.onclick = async () => {
          let proposalId = proposals.value;
          //remove any previous version of cached terrain for this proposal.
          deleteCacheForKey(`3d-sketch-terrain-${proposalId}`)
        }
      }      
    }
  }

  enableSyncFunction(proposalId) {
    let syncButton = document.getElementById("sync-btn");
    if(syncButton !== null)
    {
      (syncButton as HTMLButtonElement).disabled = false;
      syncButton.onclick = () => {
        this.syncToForma(proposalId);
      };
    }      
  }

  syncToForma(proposalId) {
    let projectSelect = document.getElementById("project-select");
    let proposalSelect = document.getElementById("proposal-select");
    (projectSelect as HTMLSelectElement).disabled = true;
    (proposalSelect as HTMLSelectElement).disabled = true; 
    this.state = {
      workspaceId: this.state.workspaceId,
      projectId: this.state.projectId,
      proposalId: proposalId,
    };
    let message = document.getElementById("message");
    message.className = "info";
    message.textContent = "Sending datas to Forma...";
    FormitFormaService.save(this.state, (success) => {
      this.state = {
        workspaceId: this.state.workspaceId,
        projectId: this.state.projectId,
        proposalId: proposalId,
      }
      this.setStatus(false, success, success ? "Datas have been synchronized successfully on Forma" : "Synchronization failed");
      (projectSelect as HTMLSelectElement).disabled = false;
      (proposalSelect as HTMLSelectElement).disabled = false; 
    });
  }

  setStatus(toInfo: boolean, success: boolean, message: string)   {
    let messageElem = document.getElementById("message");
    if(messageElem) {
      if(toInfo) {
        messageElem.className = "info";
      }
      else {
        messageElem.className = success ? "success" : "error";
        if(!success)
        {
          console.log(message)
        }
      }
      messageElem.textContent = message;
    }
  }

  render() {
    return (
      <div id="FormaControls" className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <h3 id="identifier">Welcome to Formit-Forma plugin</h3>
          <select id="workspace-select" 
                  className="fetchSelect" 
                  defaultValue={""}
                  hidden>
          </select>
          <select id="project-select" 
                  className="fetchSelect" 
                  defaultValue={""}
                  disabled>
            <option value=''>Select a project</option>
          </select>
          <select id="proposal-select" 
                  className="fetchSelect" 
                  defaultValue={""} 
                  disabled>
            <option value=''>Select a proposal</option>
          </select>
          <button className="st" id="load-btn" disabled>Load</button> 
          <button className="st" id="clear-btn" disabled>Clear</button> 
          <button className="st" id="sync-btn" disabled>Sync</button>  
          <label id="message" className="info"></label>   
        </div>
      </div>
    );
  }
}
