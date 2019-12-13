import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder,private ht:HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      customername: ['', Validators.required],
      contactName: ['', Validators.required],
      email: ['', Validators.required],
      mobile:['',Validators.required],
      business:['',Validators.required],
      birth:['',Validators.required],
      anniversary:['',Validators.required],
      primary:['',Validators.required],
      secondary:['',Validators.required],
      account:['',Validators.required],
      lead:['',Validators.required],
      address:['',Validators.required],
      Street1:['',Validators.required],
      Street2:['',Validators.required],
      country:['',Validators.required],
      State:['',Validators.required],
      Pincode:['',Validators.required]
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


