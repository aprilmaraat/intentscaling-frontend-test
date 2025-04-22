import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getContacts().subscribe(data => this.contacts = data.data || []);
  }
}