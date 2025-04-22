import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// const BASE_URL = 'https://ipgroupapi-akepbgdpacevf8gv.australiaeast-01.azurewebsites.net/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMzAyYzYyOS01N2YwLTQzNDEtYWFjMi0zODRlMjcwZmRmOTQiLCJpYXQiOjE3NDQ4MjA0NTUsImV4cCI6MTc0NjAzMDA1NSwiaXNzIjoiSW50ZW50IiwiYXVkIjoiSW52ZXN0b3IgUGFydG5lciBHcm91cCJ9.WEKS8In0RBj5zHLdLkSM4vffqvLDoQKY4ZlL7cNYW_I'; // full token

const HEADERS = {
  headers: new HttpHeaders()
  .set('Authorization', `Bearer ${TOKEN}`)
};

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    // return this.http.get(`${BASE_URL}/Contact/List?pageNumber=1&pageSize=10`, HEADERS);
    return this.http.get(`/api/Contact/List?pageNumber=1&pageSize=10`, HEADERS);
  }

  getProperties(): Observable<any> {
    // return this.http.get(`${BASE_URL}/Property/List?pageNumber=1&pageSize=3`, HEADERS);
    return this.http.get(`/api//Property/List?pageNumber=1&pageSize=3`, HEADERS);
  }
}