import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})

export class ActionComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;

  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  

    this.registerForm = this.formBuilder.group({
      customername: ['', Validators.required],
      customerspoc: ['', Validators.required],
      requirementname: ['', Validators.required],
      roles:['',Validators.required],
      skills:['',Validators.required],
      qualifications:['',Validators.required],
      certificates:['',Validators.required],
      requirementopendate:['',Validators.required],
      requirementendate:['',Validators.required],
      skilltype:['',Validators.required],
      relevantexperience:['',Validators.required],
      positions:['',Validators.required],
      requirementtype:['',Validators.required],
      minbudget:['',Validators.required],
      maxbudget:['',Validators.required],
      status:['',Validators.required],
      joblocation:['',Validators.required],
      noticeperiod:['',Validators.required],
      Pincode:['',[Validators.required,Validators.pattern('[1-9]')]],
});
  }
  get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
}
