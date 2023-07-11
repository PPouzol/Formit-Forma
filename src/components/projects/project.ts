import fetchResultObj from "../../common/interfaces";
import Proposal from "../proposals/proposal"

export default class Project extends fetchResultObj {
    public projectId: string;
    public newestProposalId: string;
    public createdSince: number;
    public creationTime: string;
    public proposalCount: number;
    public proposals: Proposal[];
    public proposalsListContainer: string;

    Fill(_id: string, _name: string, _version: string, _metadata: any) {
        super.Fill(_id, _name, _version, _metadata, "");

        this.projectId = this.id;
        this.newestProposalId = "";
        this.creationTime = "";
        this.proposalCount = 0;
        this.createdSince = 0;
    }
} 
  