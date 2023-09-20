import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, allCustomPolicy } from 'src/app/core/core.index';

@Component({
  selector: 'app-leave-settings',
  templateUrl: './leave-settings.component.html',
  styleUrls: ['./leave-settings.component.scss']
})
export class LeaveSettingsComponent {
  public allCustomPolicy: Array<allCustomPolicy>;
  public buttonDisabled  = false;
  public cancelDisabled  = false;
  public buttondisabled  = false;
  public canceldisabled  = false;

   //Edit variable, its true than read more string will print
   public Edit = true;
   public Edits = true;
   public edits = true;
   public read = true;

   //hiding info box
   public visible = false;
   public visibles = false;
   public Visible = false;
   public readless = false

  constructor(public router: Router, private dataservice: DataService) {
    this.allCustomPolicy = this.dataservice.allCustomPolicy
  }

  //onclick toggling both
  onclick()
  {
    this.Edit = !this.Edit; //not equal to condition
    this.visible = !this.visible
  }
  //onclick toggling both
  onclicks()
  {
    this.Edits = !this.Edits; //not equal to condition
    this.visibles = !this.visibles
  }
  onClick()
  {
    this.edits = !this.edits; //not equal to condition
    this.Visible = !this.Visible
  }
  onClicks()
  {
    this.read = !this.read; //not equal to condition
    this.readless = !this.readless
  }

}
