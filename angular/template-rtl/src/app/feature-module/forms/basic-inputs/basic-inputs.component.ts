import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-basic-inputs',
  templateUrl: './basic-inputs.component.html',
  styleUrls: ['./basic-inputs.component.scss']
})
export class BasicInputsComponent implements OnInit {
  public basicForm!: FormGroup ;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.basicForm = this.formBuilder.group({
      txt: [""],
    });
  }


}
