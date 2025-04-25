import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { CrudPostComponent } from './crud-post/crud-post.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'connxion ', component: ConnexionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new', component: CrudPostComponent },
  { path: 'details/:id', loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent) },
];
