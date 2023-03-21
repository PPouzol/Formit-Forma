import fetchResultObj from "../../common/interfaces";

export default class Proposal extends fetchResultObj {
    public proposalId: string;
    public projectId: string;
    public creationDate: string;

    Fill(_id: string, _name: string, _version: string, _metadata: any, _urn: string) {
        super.Fill(_id, _name, _version, _metadata, _urn);

        this.proposalId = this.id;
        this.creationDate = "";
    }
} 
  