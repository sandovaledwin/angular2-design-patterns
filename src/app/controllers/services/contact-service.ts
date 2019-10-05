import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

export class ContactService {

    static _instance: ContactService;

    static instance() {
        if (!ContactService._instance) {
            ContactService._instance = new ContactService();
        }
        return ContactService._instance;
    }

    addContact(name: string, category: string, number: string) {
        const id = Math.floor(1000 + Math.random() * 9000);
        return new Observable((observer) => {
            observer.next(
                new Contact(id,name,[{category, number }])
            );
            observer.complete();
        });
    }

}