import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  properties: Property[] = [];
  ownedProperties: Property[] = [];
  rejectedProperties: Property[] = [];
  searchText: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProperties().subscribe((data) => {
      this.properties = data.items.$values
      this.ownedProperties = this.properties.filter(x => x.propertyPrice <= 0);
      this.rejectedProperties = this.properties.filter(x => x.propertyPrice <= 0);
      console.log('Data', this.properties);
    });
  }

  filterProperties() {

  }
}