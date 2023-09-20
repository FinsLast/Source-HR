import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, clientsDatas, companiesList } from 'src/app/core/core.index';

@Component({
  selector: 'app-clients-content-page',
  templateUrl: './clients-content-page.component.html',
  styleUrls: ['./clients-content-page.component.scss'],
})
export class ClientsContentPageComponent {
  public companiesList: Array<companiesList>;
  public clientsData: Array<clientsDatas>;
  constructor(public router: Router, private dataservice: DataService) {
    this.companiesList = this.dataservice.companiesList;
    this.clientsData = this.dataservice.clientsDatas;
  }
  
}
