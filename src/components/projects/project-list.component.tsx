import * as ProjectS from "./project-style"
import ProjectComponent from "./project.component"
import Project from "./project"

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  projects: Project[];
  projectSelectionHandler: any;
  proposalSelectionHandler: any;
  selectedProjectId: string;
  selectedProposalId: string;
}

function ProjectList(props: Props) {
  const { projects, projectSelectionHandler, proposalSelectionHandler, selectedProjectId, selectedProposalId } = props;

  if(!projects)
  {
    return (
      <>
        <div data-checkly="ProjectList">
        </div>
      </>
    );
  }

  function changeSelectedProject(projectId) {
    // change selected proposal
    changeSelectedProposal("")
    projectSelectionHandler(projectId);
  }

  function changeSelectedProposal(proposalId) {
    proposalSelectionHandler(proposalId);
  }

  return (
    <>
      <div id="projectlist-container" data-checkly="ProjectList">
        <ProjectS.ListContainer>
          { projects?.map((project) => (
              <ProjectComponent
                key={project.projectId}
                project={project}
                projectSelectionHandler={changeSelectedProject}
                proposalSelectionHandler={changeSelectedProposal}
                isSelected={project.projectId === selectedProjectId}
                selectedProposalId={selectedProposalId}
              />
            )) 
          }
        </ProjectS.ListContainer>
      </div>
    </>
  );
}

export default ProjectList;