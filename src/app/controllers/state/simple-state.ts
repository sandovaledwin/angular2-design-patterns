import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact';

export class SimpleState {

    private updating = new BehaviorSubject<boolean>(false);

    private contacts = new BehaviorSubject<Array<Contact>>([
        new Contact(123,'Edwin Sandoval',[{category: 'personal', number: '3318484683'}])
    ]);
    
    isUpdating$ = this.updating.asObservable(); 

    contactList$ = this.contacts.asObservable();

    static _instance: SimpleState;

    static instance() {
        if (!SimpleState._instance) {
            SimpleState._instance = new SimpleState();
        }
        return SimpleState._instance;
    }
    
    setIsUpdating(isUpdating: boolean) {
        this.updating.next(isUpdating);
    }

    addContact(contact: Contact) {
        const contactsList = this.contacts.getValue();
        this.contacts.next([...contactsList, contact]);
    }

}