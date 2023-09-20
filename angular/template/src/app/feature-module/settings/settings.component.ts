import { Component, HostListener, NgZone } from "@angular/core";
import { NavigationEnd, Event, Router } from "@angular/router";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
@HostListener("window: resize", ["$event"])
export class SettingsComponent {
  public innerHeight!: string;
  public urlComplete = {
    mainUrl: "",
    subUrl: "",
    childUrl: "",
  };
  getScreenHeight() {
    this.innerHeight = window.innerHeight + "px";
  }

  constructor(private ngZone: NgZone, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split("/");
        this.urlComplete.mainUrl = url[1];
        this.urlComplete.subUrl = url[2];
        this.urlComplete.childUrl = url[3];
      }
    });
    window.onresize = () => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + "px";
      });
    };
    this.getScreenHeight();
  }


}