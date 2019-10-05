import { Contact } from './models/contact';
import { ContactService } from './services/contact-service'
import { Observable } from 'rxjs';
import { SimpleState } from './state/simple-state';

export class ContactAbstract {

    state: SimpleState = SimpleState.instance();
    contactService: ContactService = ContactService.instance();

    static _instance: ContactAbstract;

    static instance() {
        if (!ContactAbstract._instance) {
            ContactAbstract._instance = new ContactAbstract();
        }
        return ContactAbstract._instance;
    }

    isUpdating$(): Observable<boolean> {
        return this.state.isUpdating$;
    }

    setIsUpdating(isUpdating: boolean) {
        this.state.setIsUpdating(isUpdating);
    }

    addContact(name: string, category: string, number: string): void {
        this.setIsUpdating(true);
        this.contactService.addContact(
            name, 
            category, 
            number
        ).subscribe((contact: Contact) => {
            this.state.addContact(contact);
            this.setIsUpdating(false);
        });
    }

    getContactsList$(): Observable<Array<Contact>> {
        return this.state.contactList$;
    }
    
}