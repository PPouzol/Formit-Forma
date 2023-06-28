import * as ProposalS from "./proposal-style"
import ProposalComponent from "./proposal.component"
import Proposal from "./proposal"

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  proposals: Proposal[];
  proposalSelectionHandler: any;
  selectedProposalId: string;
}

function ProposalList(props: Props) {
  const { proposals, proposalSelectionHandler, selectedProposalId } = props;

  if(!proposals)
  {
    return (
      <>
        <div data-checkly="ProposalList">
        </div>
      </>
    );
  }

  return (
    <>
      <div data-checkly="ProposalList">
        <ProposalS.ListContainer>
          { proposals?.map((proposal) => (
              <ProposalComponent
                key={proposal.proposalId}
                proposal={proposal}
                proposalSelectionHandler={proposalSelectionHandler}
              />
            )) 
          }
        </ProposalS.ListContainer>
      </div>
    </>
  );
}

export default ProposalList;