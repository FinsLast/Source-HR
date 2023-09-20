import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataService, getProjects } from 'src/app/core/core.index';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent{
  public projects: Array<getProjects>;
  public rows!:Array<object>;
  public srch !:Array<object>;
  constructor(public router: Router, private dataservice: DataService) {
    this.projects = this.dataservice.projects;
  }
  


}
