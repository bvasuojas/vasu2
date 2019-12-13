import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      customerType: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.maxLength(10)], Validators.pattern("[6789][0-9]{9}") ],
        shortName: ['', Validators.required],
        percentage: ['', Validators.required],
        name: ['', Validators.required],
        billing:['', Validators.required],
        services:['', Validators.required],
        empanelment:['', Validators.required],
        enddate:['', Validators.required],
        leaves:['', Validators.required],
        payment:['', Validators.required],
        address:['', Validators.required],
        street:['', Validators.required],
        street2:['', Validators.required],
        city:['', Validators.required],
        state:['', Validators.required],
        pincode:['', Validators.required, Validators.maxLength(5)],
    });
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems= [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings  = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 0,
      allowSearchFilter:true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    }
    onSelectAll(items: any) {
    console.log(items);
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
