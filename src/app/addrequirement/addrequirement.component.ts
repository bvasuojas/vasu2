import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-addrequirement',
  templateUrl: './addrequirement.component.html',
  styleUrls: ['./addrequirement.component.css']
})
export class AddrequirementComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;


  // this is the fist edit
  submitted1 = false;
  dropdownList1 = [];
  selectedItems1= [];
  dropdownSettings1 :IDropdownSettings;
//second
  submitted2 = false;
  dropdownList2 = [];
  selectedItems2= [];
  dropdownSettings2 :IDropdownSettings;

  submitted3 = false;
  dropdownList3 = [];
  selectedItems3= [];
  dropdownSettings3 :IDropdownSettings;

  submitted4 = false;
  dropdownList4 = [];
  selectedItems4= [];
  dropdownSettings4 :IDropdownSettings;
  rpo_url: string;

  constructor(private formBuilder: FormBuilder,private ht:HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      customername: ['', Validators.required],
      customerspoc: ['', Validators.required],
      requirementname: ['', Validators.required],
      requirementopendate:['',Validators.required],
      requirementendate:['',Validators.required],
      skilltype:['',Validators.required],
      relevantexperience:['',Validators.required],
      yrs:['',Validators.required],
      positions:['',Validators.required],
      requirementtype:['',Validators.required],
      status:['',Validators.required],
      joblocation:['',Validators.required],
      noticeperiod:['',Validators.required],
      roles:['',Validators.required],
      skills:['',Validators.required],
      qualifications:['',Validators.required],
      certificates:['',Validators.required],
      jobdescription:['',Validators.required],
      reqdescription:['',Validators.required]
});


// this is the second edit
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
//second
this.dropdownList2 = [
  { item_id: 1, item_text: 'Mumbai' },
  { item_id: 2, item_text: 'Bangaluru' },
  { item_id: 3, item_text: 'Pune' },
  { item_id: 4, item_text: 'Navsari' },
  { item_id: 5, item_text: 'New Delhi' }
];
this.selectedItems2= [
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
this.selectedItems3= [
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

this.dropdownList4 = [
  { item_id: 1, item_text: 'Mumbai' },
  { item_id: 2, item_text: 'Bangaluru' },
  { item_id: 3, item_text: 'Pune' },
  { item_id: 4, item_text: 'Navsari' },
  { item_id: 5, item_text: 'New Delhi' }
];
this.selectedItems4= [
  // { item_id: 3, item_text: 'Pune' },
  // { item_id: 4, item_text: 'Navsari' }
];
this.dropdownSettings4 = {
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
onItemSelect(item: any) {
  console.log(item);
  }
  onSelectAll(items: any) {
  console.log(items);
}
token

onSubmit(e)
  {
 this.submitted =true
  let data={
    customername: this.registerForm.controls['customername'].value,
    customerspoc: this.registerForm.controls['customerspoc'].value,
    requirementname: this.registerForm.controls['requirementname'].value,
    requirementopendate: this.registerForm.controls['requirementopendate'].value,
    requirementendate:this.registerForm.controls['requirementendate'].value,
    skilltype:this.registerForm.controls['skilltype'].value,
    relevantexperience:this.registerForm.controls['relevantexperience'].value,
    yrs:this.registerForm.controls['yrs'].value,

    positions:this.registerForm.controls['positions'].value,
    requirementtype:this.registerForm.controls['requirementtype'].value,
    status:this.registerForm.controls['status'].value,
    joblocation:this.registerForm.controls['joblocation'].value,
    noticeperiod:this.registerForm.controls['noticeperiod'].value,
    roles:this.registerForm.controls['roles'].value,
    skills:this.registerForm.controls['skills'].value,
    qualifications:this.registerForm.controls['qualifications'].value,
    certificates:this.registerForm.controls['certificates'].value,
    jobdescription:this.registerForm.controls['jobdescription'].value,
    reqdescription:this.registerForm.controls['reqdescription'].value,

  }
 
  console.log("dfsd",data);
  
  this.token = localStorage.getItem("token")
  console.log(this.token)
  this.ht.post(this.rpo_url+"/addClientContact/findActiveContactByClientId/undefined/AM/4 ",data,{
    headers: {
      'X-Access-Token':this.token,
     'Content-Type': 'application/json'
   }
  }).subscribe(resp=>(console.log("dashfd",resp)))
  }
  get f() { return this.registerForm.controls; }
}




