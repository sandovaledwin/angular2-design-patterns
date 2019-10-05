import { Phone } from './phone';

export class Contact {
    
    id: String;
    name: String;
    phones: Array<Phone>;

    constructor(id = null, name = '', phones = []) {
        this.id = id;
        this.name = name;
        this.phones = phones;
    }

}