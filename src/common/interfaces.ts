export default class fetchResultObj {
    public id: string;
    public name: string;
    public metadata: any;

    constructor() {
        this.id = '';
        this.name = '';
        this.metadata = null;
    }

    Fill(_id: string, _name: string, _metadata: any) {
        this.id = _id;
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