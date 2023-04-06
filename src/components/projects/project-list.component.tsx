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
    // remove selected classname from any previously selected project
    const allElements = document.querySelectorAll('.project.selected');
    allElements.forEach((element) => {
      element.classList.remove('selected');
    });

    const allProposalsElements = document.querySelectorAll('.proposal-visible');
    allProposalsElements.forEach((proposal) => {
      proposal.classList.remove('proposal-visible');
      proposal.classList.add('proposal-hidden');
    });

    // change selected proposal
    changeSelectedProposal("")
    
    projectSelectionHandler(projectId);
  }

  function changeSelectedProposal(proposalId) {
    const allElements = document.querySelectorAll('.proposal.selected');
    allElements.forEach((element) => {
      element.classList.remove('selected');
    });

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