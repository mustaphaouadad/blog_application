import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, CommonModule , RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navItems = [
    { label: 'home', link: 'home' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { label: 'posts', link: 'posts' },
  ];
}
