import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { data } from 'jquery';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;
  token: string;
  ht: any;
  rpo_url: string;
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


 
    save(e)
    {
   this.submitted =true
    let data={
      customerName: this.registerForm.controls['customerName'].value,
      customerType: this.registerForm.controls['customerType'].value,
      email: this.registerForm.controls['email'].value,
      phoneNumber:this.registerForm.controls['phoneNumber'].value,
      shortName:this.registerForm.controls['shortName'].value,
      percentage:this.registerForm.controls['percentage'].value,
      name:this.registerForm.controls['name'].value,
      billing:this.registerForm.controls['billing'].value,
      services:this.registerForm.controls['services'].value,
      empanelment:this.registerForm.controls['empanelment'].value,
      enddate:this.registerForm.controls['enddate'].value,
      leaves:this.registerForm.controls['leaves'].value,
      payment:this.registerForm.controls['payment'].value,
      address:this.registerForm.controls['address'].value,
      street:this.registerForm.controls['street'].value,
      street2:this.registerForm.controls['street2'].value,
      city:this.registerForm.controls['city'].value,
      state:this.registerForm.controls['state'].value,
      pincode:this.registerForm.controls['pincode'].value,
    }
  
     this.submitted = true;

      // stop here if form is invalid
      // if (this.registerForm.invalid) {
      //     return;
      // }
      console.log("dfsd",data);
      this.token = localStorage.getItem("token")
      console.log(this.token)
      this.ht.post(this.rpo_url+"/client/getAllClientsByRole/4/AM/1/10?sortingOrder=undefined&sortingField=undefined&searchText=undefined&searchField=undefined",data,{
        headers: {
          'X-Access-Token':this.token,
         'Content-Type': 'application/json'
       }
      }).subscribe(resp=>(console.log("dashfd",resp)))
      }
      get f() { return this.registerForm.controls;
       }
    
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

