import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.css']
})
export class ContactMenuComponent implements OnInit {

  @Input() currentComponent: String;
  @Input() contact: any;
  @Output() onChange = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  addContact() {
    this.contact.addContact(
      'Janeth Sanchez', 
      'personal',
      '331122323'       
    );
    this.onChange.emit('contact-form');
  }

}
