import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  properties: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProperties().subscribe(data => this.properties = data.data || []);
  }
}