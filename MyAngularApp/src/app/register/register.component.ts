import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  // form: FormGroup = new FormGroup({
  //   fullname: new FormControl(''),
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   acceptTerms: new FormControl(false),
  // });
  firstName: string="";
  middleName: string="";
  lastName: string="";
  userEmail: string="";
  userPassword: any;
  confirmPassword:any;
  acceptTerms: string="";
  userid: any;
  registerTitle: string = "Registration Form";
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required],],
      middleName: ['', [Validators.required],],
      lastName: ['', [Validators.required],],
      userEmail: ['', [Validators.required],],
      userPassword: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(20)],],
      confirmPassword: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(20)],],
      acceptTerms: ['', [Validators.required],],

    });
    
  }

}
