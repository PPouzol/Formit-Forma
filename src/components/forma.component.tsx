import { Component } from "react";
import FormaService from "../services/forma.service";

type Props = {};

export default class FormitForma extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleFetchWorkspace();
  }

  handleFetchWorkspace()  {
    FormaService.getWorkspaces()
    .then(values => {
      console.log(values)
      let workspaces = (document.getElementById("workspace-select") as HTMLSelectElement);
      if(workspaces !== null)
      {
        for (const value of values) {
          const option = document.createElement('option');
          option.value = value.id;
          option.innerHTML = value.name;
          workspaces.appendChild(option);
        }
         
        workspaces!.addEventListener('change', this.handleWorkspaceSelectChange);        
      }
    }).catch(error => console.log(error))     
  }

  handleWorkspaceSelectChange()  {
    let workspaces = (document.getElementById("workspace-select")) as HTMLSelectElement;
    if(workspaces.selectedIndex !== 0)
    {
      let projects = (document.getElementById("project-select")) as HTMLSelectElement;
      projects!.disabled = false;

      FormaService.getProjects("0")
      .then(values => {
        console.log(values)
        if(projects !== null)
        {
          for (const value of values) {
            const option = document.createElement('option');
            option.value = value.id;
            option.innerHTML = value.name;
            projects.appendChild(option);
          }
        }
      }).catch(error => console.log(error))   
    }  
  }
  
  projectSelected() {
    // TBD
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <h3 id="identifier">Forma component</h3>
          <select id="workspace-select" 
                  className="fetchSelect" 
                  defaultValue={""}>
            <option value="">Select a Workspace</option>
          </select>
          <select id="project-select" className="fetchSelect" defaultValue={""} disabled>
            <option value="">Select a Project</option>
          </select>
          <button className="st" id="sync-btn" hidden>Sync</button>     
        </div>
      </div>
    );
  }
}
