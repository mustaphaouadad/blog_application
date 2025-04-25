import { Component, inject } from '@angular/core';
import { Auth, User , signOut } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private router = inject(Router);

  auth= inject(Auth);



  onSignOut(){
    signOut(this.auth).then(response => {
        this.router.navigate(['/auth/sign-in'])
    })
    .catch(error => {
      console.error('error occured',error);
    })
  }
}
