import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Contact } from './domain/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // contacts: Contact[];
  contacts: any;

  cols: any[];

  selectedContact: Contact;

  ngOnInit() {

    // Retrieve Contacts
    this.http.get('/contacts').subscribe(data => {
      this.contacts = data as Contact[];
    });

    // Define table column names
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'address', header: 'Address' },
      { field: 'city', header: 'City' },
      { field: 'action', header: 'Action' }
    ];

  }

  createContact() {
    this.router.navigate(['/contact-create']);
  }

  onRowSelect(event) {
    // Put the selected user's id in a variable
    // The '+' sign converts the id from a string to a number
    const regId = +event.data.id;
    let link = null;

    link = ['/contact-detail', regId];

    // Navigate to the detail component
    this.router.navigate(link);
  }

}
