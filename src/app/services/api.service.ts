import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMzAyYzYyOS01N2YwLTQzNDEtYWFjMi0zODRlMjcwZmRmOTQiLCJpYXQiOjE3NDQ4MjA0NTUsImV4cCI6MTc0NjAzMDA1NSwiaXNzIjoiSW50ZW50IiwiYXVkIjoiSW52ZXN0b3IgUGFydG5lciBHcm91cCJ9.WEKS8In0RBj5zHLdLkSM4vffqvLDoQKY4ZlL7cNYW_I';
  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`
  });

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      'https://ipgroupapi-akepbgdpacevf8gv.australiaeast-01.azurewebsites.net/api/Contact/List?pageNumber=1&pageSize=10',
      { headers: this.headers }
    );
  }

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(
      'https://ipgroupapi-akepbgdpacevf8gv.australiaeast-01.azurewebsites.net/api/Property/List?pageNumber=1&pageSize=3',
      { headers: this.headers }
    );
  }
}