export default class fetchResultObj {
    public id: string;
    public name: string;
    public metadata: any;
    public version: string;

    constructor() {
        this.id = '';
        this.name = '';
        this.version = '1';
        this.metadata = null;
    }

    Fill(_id: string, _name: string, _version: string, _metadata: any) {
        this.id = _id;
        this.version = _version;
        if(_name === null || _name === '')
        {
            let split = _id.split('prop_');
            this.name = `prop_${split[1].substring(0, 2)}`;
        }
        else
        {
            this.name = _name;
        }
        this.metadata = _metadata;
    }
}