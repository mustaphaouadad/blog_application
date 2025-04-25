import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirecToLogin = () => redirectUnauthorizedTo('/auth/sign-in');
const routes: Routes = [
  {
    path : '',
    component:WelcomePageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./component/auth/auth.module')
    .then(m => m.AuthModule)
  },
  {
    path: 'dashbord',
    loadChildren: () => import('./component/dashbord/dashbord.module')
    .then(m => m.DashbordModule),
    canActivate:[AuthGuard],
    data:{
      authGuardPipe: redirecToLogin
    }

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
