import * as ProjectS from "./project-style"
import FormaService from "../../services/forma.service"
import Project from "./project"
import ProposalList from "../proposals/proposal-list.component"

interface Props {
    project: Project;
    projectSelectionHandler: any;
    proposalSelectionHandler: any;
    isSelected: boolean;
    selectedProposalId: string;
}

function ProjectComponent(props: Props) {
    const { project, projectSelectionHandler, proposalSelectionHandler, isSelected, selectedProposalId } = props;
    const projectThumbnail = FormaService.FormatThumbnailUrl(project.projectId, project.urn);

    return (
    <>
        <ProjectS.Container
            onClick={() => { 
                projectSelectionHandler(project.id); 
            }}>
            <ProjectS.Content id={project.projectId} 
                className={isSelected ? "project selected" : "project"}>
                <ProjectS.InfosContainer className="infos">
                    <ProjectS.ThumbnailContainer>
                        <ProjectS.Thumbnail>
                            <img alt="Site Preview" 
                                src={projectThumbnail} 
                                width="115" height="115">
                            </img>
                        </ProjectS.Thumbnail>
                    </ProjectS.ThumbnailContainer>
                    <ProjectS.InfosColumn>
                        <ProjectS.InfosContainer>
                            <ProjectS.InfosContent>
                                <ProjectS.SpanCount>{project.proposalCount}</ProjectS.SpanCount>
                                <ProjectS.SpanDescription>Proposals</ProjectS.SpanDescription>
                            </ProjectS.InfosContent>
                        </ProjectS.InfosContainer>
                    </ProjectS.InfosColumn>
                </ProjectS.InfosContainer>
                <ProjectS.TitleContainer>
                    <ProjectS.Title>{project.name}</ProjectS.Title>
                    <ProjectS.SubTitleContainer>
                        <ProjectS.SubTitle>{project.creationTime}</ProjectS.SubTitle>
                    </ProjectS.SubTitleContainer>
                </ProjectS.TitleContainer>
            </ProjectS.Content>
        </ProjectS.Container>
        <div id={project.proposalsListContainer} 
            className={isSelected ? "proposal-visible" : "proposal-hidden"} 
        >
            <ProposalList 
                proposals={project.proposals}
                proposalSelectionHandler={proposalSelectionHandler}
                selectedProposalId={selectedProposalId}>
            </ProposalList>
        </div>
    </>
    );
}
    
export default ProjectComponent;