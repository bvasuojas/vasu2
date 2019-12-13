import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private ht:HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile:['',[Validators.required,Validators.minLength(10)]],
      candidateSource:['',Validators.required],
      education:['',Validators.required],
      applyingAs:['',Validators.required],
    })
  }
token
submitted = false;
save(e)
  {
 this.submitted =true
  let data={
    title: this.registerForm.controls['title'].value,
    firstName: this.registerForm.controls['firstName'].value,
    lastName: this.registerForm.controls['lastName'].value,
    email: this.registerForm.controls['email'].value,
    mobile:this.registerForm.controls['mobile'].value,
    candidateSource:this.registerForm.controls['candidateSource'].value,
    applyingAs:this.registerForm.controls['applyingAs'].value,
    education:this.registerForm.controls['education'].value,
  //   " mobile":e. mobile,
  // "email":e.email,
  // "candidateSource":e.candidateSource,
  //  "applyingAs":e.applyingAs,
  // "totalExperience":e.totalExperience,
  // "noOfMonths":e.noOfMonths,
  // "relevantExperience":e.relevantExperience,
  // "currentCTC":e.currentCTC,
  // "expectedCTC":e.expectedCTC,
  // "salaryNegotiable":e.salaryNegotiable,
  // "noticePeriod":e.noticePeriod,
  // "pancardNumber":e.pancardNumber,
  // "payRollCompanyName":e.payRollCompanyName,
  // "willingtoRelocate":e.willingtoRelocate,
  // "currentJobType":e.currentJobType,
  // "certificationscheck":e.certificationscheck
  }
  console.log("dfsd",data);
  this.token = localStorage.getItem("token")
  console.log(this.token)
  this.ht.post("http://192.168.1.137:8089/rpo/rest/allocaterequirment",data,{
    headers: {
      'X-Access-Token':this.token,
     'Content-Type': 'application/json'
   }
  }).subscribe(resp=>(console.log("dashfd",resp)))
  }
  // get f() { return this.registerForm.controls; }
}
 

