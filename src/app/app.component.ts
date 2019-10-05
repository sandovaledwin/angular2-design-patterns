import { Component } from '@angular/core';
import { ContactAbstract } from './controllers/ContactAbstract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentComponent: String = 'contact-list';
  contactAbstractLayer: ContactAbstract = ContactAbstract.instance();
  actions = this.contactAbstractLayer;

  ngOnInit() {

    console.log("ContactAbstract: ");
    this.contactAbstractLayer.isUpdating$().subscribe(
      (isUpdating) => {
        console.log('Is updating:');
        console.log(isUpdating);
      }
    );

    this.contactAbstractLayer.getContactsList$().subscribe(
      (contacts) => { 
        console.log('Contacts List:');
        console.log(contacts);
      }
    );

    /*
    setTimeout(() => {
      this.contactAbstractLayer.addContact(
        'Janeth Sanchez', 
        'personal',
        '331122323'        
      )
    }, 5000 );
    */

  }

}
