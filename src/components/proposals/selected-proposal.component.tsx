import * as ProposalS from "./proposal-style"
import ProposalComponent from "./proposal.component"
import Proposal from "./proposal"
import Project from "./../projects/project"

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  proposal: Proposal;
  project: Project;
  selectedProposalId: string;
  fetchSelectionHandler: any;
  syncSelectionHandler: any;
  backHandler: any;
}

function SelectedProposal(props: Props) {
  const { proposal, project, selectedProposalId, fetchSelectionHandler, syncSelectionHandler, backHandler } = props;
  return (
    <>
      <ProposalS.BackLabel onClick={backHandler}>&lt;&nbsp;&nbsp;Back</ProposalS.BackLabel>
      <div data-checkly="ProposalList" className="select-proposal-list">
        <ProposalS.ListContainer>
          <ProposalComponent
            key={proposal?.proposalId}
            proposal={proposal}
            project={project}
            isSelected={proposal?.proposalId === selectedProposalId}
          />
        </ProposalS.ListContainer>
      </div>
      <div id="action">
        <button className="st blue disabled" id="load-btn" onClick={fetchSelectionHandler}>Fetch from Forma</button> 
        <button className="st gray hidden" id="sync-btn" onClick={syncSelectionHandler}>Send to Forma</button>  
      </div>
    </>
  );
}

export default SelectedProposal;