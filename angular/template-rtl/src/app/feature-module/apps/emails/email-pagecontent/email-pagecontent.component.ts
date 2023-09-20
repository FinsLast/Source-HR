import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-email-pagecontent",
  templateUrl: "./email-pagecontent.component.html",
  styleUrls: ["./email-pagecontent.component.css"],
})
export class EmailPagecontentComponent {
  status = false;
  constructor( private routes: Router) {

  }

  
  clickMessage() {
    this.routes.navigate(["/apps/mailview"]);
  }
  clickEvent() {
    this.status = !this.status;
  }
}
