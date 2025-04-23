import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  searchText: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getContacts().subscribe((data) => {
      this.contacts = data.items.$values;
      this.filteredContacts = this.contacts;
    });
  }

  filterContacts() {
    this.filteredContacts = this.contacts.filter(x => (x.firstName + ' ' + x.lastName)
      .toLocaleLowerCase()
      .includes(this.searchText.toLocaleLowerCase()) || 
      x.email?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      x.phone?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      x.type?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
    );
  }
}