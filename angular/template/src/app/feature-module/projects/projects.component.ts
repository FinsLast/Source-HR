import { Component, NgZone  } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent {
  public sidebarTasks  = false;
  public base ='';
  public page = '';
  constructor(private ngZone: NgZone, private router: Router) {
    router.events.subscribe((event: object) => {
      if (event instanceof NavigationEnd) {
        const splitVal = event.url.split('/');
          this.base = splitVal[1];
          this.page = splitVal[2];
        if (this.page === 'tasks' ) {
          this.sidebarTasks = true;
          localStorage.setItem('sidebarTasks', 'true');
        }
        else {
          this.sidebarTasks = false;
          localStorage.setItem('sidebarTasks', 'false');
        }
      }
    });
    if(localStorage.getItem('sidebarTasks')== 'true') {
      this.sidebarTasks = true;
    }
    else {
      this.sidebarTasks = false
    }

  }
  




}
