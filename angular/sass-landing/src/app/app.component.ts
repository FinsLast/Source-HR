import { Component } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sass-landing';
  url!: string;
  constructor(private router: Router) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        const url = event.url.split("/");
        this.url = url[1];
        const body = document.getElementsByTagName('body')[0];
        if ( this.url === "index2") {
          body.classList.add('second-landing-page');
        } else {
          body.classList.remove('second-landing-page');
        }
      }
    });
  }
}
