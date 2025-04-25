import { Component,inject } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
       authForm!:FormGroup;

       //init the google auth provider
       googleAuthProvider =new GoogleAuthProvider();
       // auth instance 
       auth =inject(Auth);

       isSubmissionProgresse: boolean =false;
       errrMessage : string ="";
       constructor( private router:Router){
        this.initForm();
       }
  initForm() {
    this.authForm =new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    })
  }
  onSubmit(){
    if (this.authForm.invalid) 
      return

    this.isSubmissionProgresse = true;
      //if the form is valid ,sign-in the user 

      signInWithEmailAndPassword(this.auth,this.authForm.value.email,this.authForm.value.password)
      .then((response) => {
        this.redirectToDashbordPage();

      })
      .catch(error =>{
        this.isSubmissionProgresse=false;
        console.error('error:' , error);
        if (error instanceof Error) {
          if(error.message.includes(AuthErrorCodes.INVALID_EMAIL)){
            this.errrMessage="email  is not valid";
          }
          else if (error.message.includes('auth/invalid-credential')) {
            this.errrMessage="Invalid Email/Password";
          } 
          else if (error.message.includes(AuthErrorCodes.WEAK_PASSWORD)) {
            this.errrMessage=" please entre a stronger password ";
          } 

          else if (error.message.includes(AuthErrorCodes.EMAIL_EXISTS)) {
            this.errrMessage=" The Email is already used for another accont";
          } 
          else{
            this.errrMessage="Sommeting went wrong,pleas try again";
          }
            
            
            
          
          
        }
      })

    
  }
  onSignInWithGoogle(){
    signInWithPopup(this.auth,this.googleAuthProvider)
    .then(response =>{
      this.redirectToDashbordPage();
    })
    .catch(error =>{
      console.error('eroor:',error);
      this.errrMessage = 'Sommeting went wrong,pleas try again'
    })
  }
  redirectToDashbordPage(){
    this.router.navigate(['/dashbord'])
  }
}
