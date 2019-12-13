import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-editrequirement',
  templateUrl: './editrequirement.component.html',
  styleUrls: ['./editrequirement.component.css']
})
export class EditrequirementComponent implements OnInit {
  registerForm: FormGroup;
  

  submitted1 = false;
  dropdownList1 = [];
  selectedItems1= [];
  dropdownSettings1 :IDropdownSettings;

  submitted2 = false;
  dropdownList2 = [];
  selectedItems2= [];
  dropdownSettings2 :IDropdownSettings;

  submitted3 = false;
  dropdownList3 = [];
  selectedItems3= [];
  dropdownSettings3 :IDropdownSettings;

  submitted = false;
  dropdownList = [];
  selectedItems= [];
  dropdownSettings :IDropdownSettings;


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
      reqdescription:['',Validators.required],
      jobdescription:['',Validators.required],
});

this.dropdownList1 = [
  { item_id: 1, item_text: 'Mumbai' },
  { item_id: 2, item_text: 'Bangaluru' },
  { item_id: 3, item_text: 'Pune' },
  { item_id: 4, item_text: 'Navsari' },
  { item_id: 5, item_text: 'New Delhi' }
];
this.selectedItems1 = [
  // { item_id: 3, item_text: 'Pune' },
  // { item_id: 4, item_text: 'Navsari' }
];
this.dropdownSettings1  = {
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'Unselect All',
  itemsShowLimit: 0,
  allowSearchFilter:true
};




this.dropdownList2 = [
  { item_id: 1, item_text: 'Mumbai' },
  { item_id: 2, item_text: 'Bangaluru' },
  { item_id: 3, item_text: 'Pune' },
  { item_id: 4, item_text: 'Navsari' },
  { item_id: 5, item_text: 'New Delhi' }
];
this.selectedItems2 = [
  // { item_id: 3, item_text: 'Pune' },
  // { item_id: 4, item_text: 'Navsari' }
];
this.dropdownSettings2  = {
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'Unselect All',
  itemsShowLimit: 0,
  allowSearchFilter:true
};



this.dropdownList3 = [
  { item_id: 1, item_text: 'Mumbai' },
  { item_id: 2, item_text: 'Bangaluru' },
  { item_id: 3, item_text: 'Pune' },
  { item_id: 4, item_text: 'Navsari' },
  { item_id: 5, item_text: 'New Delhi' }
];
this.selectedItems3 = [
  // { item_id: 3, item_text: 'Pune' },
  // { item_id: 4, item_text: 'Navsari' }
];
this.dropdownSettings3  = {
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'Unselect All',
  itemsShowLimit: 0,
  allowSearchFilter:true
};



this.dropdownList = [
  { item_id: 1, item_text: 'Mumbai' },
  { item_id: 2, item_text: 'Bangaluru' },
  { item_id: 3, item_text: 'Pune' },
  { item_id: 4, item_text: 'Navsari' },
  { item_id: 5, item_text: 'New Delhi' }
];
this.selectedItems = [
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
