import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin/signin.component';
import { LoginGuard } from '../core/auth/login.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: SignInComponent,
        data: {
          title: 'Sign in',
        },
      },
      {
        path: 'signup',
        component: SignUpComponent,
        data: {
          title: 'Sign up',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
