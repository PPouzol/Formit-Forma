import * as ProposalS from "./proposal-style"
import * as ProjectS from "./../projects/project-style"
import FormaService from "../../services/forma.service"
import Proposal from "./proposal"
import Project from "./../projects/project"

interface Props {
    proposal: Proposal;
    project?: Project;
    proposalSelectionHandler?: any;
    isSelected?: boolean;
}

function ProposalComponent(props: Props) {
    const { proposal, project, proposalSelectionHandler, isSelected } = props;
    const thumbnail = FormaService.FormatThumbnailUrl(proposal?.projectId, proposal?.urn);

    return (
    <>
        <ProposalS.Container 
            onClick={() => { 
                if(proposalSelectionHandler) {
                    proposalSelectionHandler(proposal.id);
                } 
            }}
            className={isSelected ? "selected-container" : "proposal-container "} >
            <ProposalS.Content 
                id={proposal?.proposalId} 
                className={isSelected ? "proposal selected" : "proposal"} >
                <ProposalS.InfosContainer className="infos">
                    <ProposalS.ThumbnailContainer>
                        <ProposalS.Thumbnail>
                            <img alt="Site Preview" src={thumbnail} width="56" height="56"></img>
                        </ProposalS.Thumbnail>
                    </ProposalS.ThumbnailContainer>
                    <ProposalS.InfosColumn>
                        <ProposalS.InfosContainer>
                            <ProposalS.InfosContent>
                                <ProposalS.Title>{proposal?.name}</ProposalS.Title>
                                <ProposalS.SubTitleContainer>
                                    <ProposalS.SubTitle>{proposal?.creationDate}</ProposalS.SubTitle>
                                </ProposalS.SubTitleContainer>
                            </ProposalS.InfosContent>
                        </ProposalS.InfosContainer>
                    </ProposalS.InfosColumn>
                </ProposalS.InfosContainer>
                <ProjectS.TitleContainer className={isSelected ? "" : "hidden"}>
                    <ProjectS.Title>{project?.name}</ProjectS.Title>
                    <ProjectS.SubTitleContainer>
                        <ProjectS.SubTitle>{project?.creationTime}</ProjectS.SubTitle>
                    </ProjectS.SubTitleContainer>
                </ProjectS.TitleContainer>
            </ProposalS.Content>
        </ProposalS.Container>
    </>
    );
}
    
export default ProposalComponent;