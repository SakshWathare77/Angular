import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, PatternValidator } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
 })
 export class RegisterComponent implements OnInit 
{
  repeatPass: string ='none';
  displayMsg: string = '';
  isAccountCreated: boolean=false;
  constructor(private authService:AuthService) {}
  
 ngOnInit(): void { }

 registerForm = new FormGroup({
  firstname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*"),]),
  lastname:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  mobile:new FormControl('',[Validators.minLength(10),Validators.pattern("[0-9].*")]),
  gender:new FormControl(''),
  pwd:new FormControl('',[Validators.minLength(8),Validators.maxLength(12)]),
  rpwd:new FormControl(''),
 });

 registerSubmited() {
  if(this.Password.value == this.RPWD.value){
    console.log(this.registerForm.valid);
    this.repeatPass = 'none'

    this.authService.registerUser([
      this.registerForm.value.firstname!,
      this.registerForm.value.lastname!,
      this.registerForm.value.email!,
      this.registerForm.value.mobile!,
      this.registerForm.value.gender!,
      this.registerForm.value.pwd!, 
    ])
    .subscribe((res) => {
      if(res == 'Successfully Inserted')
      {
        this.displayMsg = 'Account Created Successfully';
        this.isAccountCreated = true;
      }
      else if (res == 'Already Exist')
      {
        this.displayMsg = 'Account already exit. try another Email.';
        this.isAccountCreated = false;
      }
      else 
      {
        this.displayMsg = 'Something went Wrong.';
        this.isAccountCreated = false;
      } 
    });
   } else{
    this.repeatPass ='inline';
  }
  
 }
 get FirstName(): FormControl{
  return this.registerForm.get("firstname") as FormControl;
 }
 get LastName(): FormControl{
  return this.registerForm.get("lastname") as FormControl;
 }
 get Email(): FormControl{
  return this.registerForm.get("email") as FormControl;
 }
 get Mobile(): FormControl{
  return this.registerForm.get("mobile") as FormControl;
 }
 get Gender(): FormControl{
  return this.registerForm.get("gender") as FormControl;
 }
 get Password(): FormControl{
  return this.registerForm.get("pwd") as FormControl;
 }
 get RPWD(): FormControl{
  return this.registerForm.get("rpwd") as FormControl;
 } 

}     
