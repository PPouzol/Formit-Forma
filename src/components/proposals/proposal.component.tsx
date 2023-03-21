import { useState } from "react";
import * as ProposalS from "./proposal-style"
import FormaService from "../../services/forma.service"
import Proposal from "./proposal"

interface Props {
    proposal: Proposal;
    proposalSelectionHandler: any;
    isSelected: boolean
}

function ProposalComponent(props: Props) {
    const { proposal, proposalSelectionHandler, isSelected } = props;

    const thumbnail = FormaService.FormatThumbnailUrl(proposal.projectId, proposal.urn);

    return (
    <>
        <ProposalS.Container 
            onClick={() => { 
                proposalSelectionHandler(isSelected ? "" : proposal.id); 
            }}>
            <ProposalS.Content 
                id={proposal.projectId} 
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
                                <ProposalS.Title>{proposal.name}</ProposalS.Title>
                                <ProposalS.SubTitleContainer>
                                    <ProposalS.SubTitle>{proposal.creationDate}</ProposalS.SubTitle>
                                </ProposalS.SubTitleContainer>
                            </ProposalS.InfosContent>
                        </ProposalS.InfosContainer>
                    </ProposalS.InfosColumn>
                </ProposalS.InfosContainer>
            </ProposalS.Content>
        </ProposalS.Container>
    </>
    );
}
    
export default ProposalComponent;