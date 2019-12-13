import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-assignrequirement',
  templateUrl: './assignrequirement.component.html',
  styleUrls: ['./assignrequirement.component.css']
})
export class AssignrequirementComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      clientname: ['', Validators.required],
      requirementname: ['', Validators.required],
      target:['',Validators.required],
      recruitername:['',Validators.required],
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
