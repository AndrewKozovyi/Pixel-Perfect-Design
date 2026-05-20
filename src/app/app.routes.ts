import { Routes } from '@angular/router';
import {LoginPage} from './pages/login-page/login-page';
import {SingUpPage} from './pages/sing-up-page/sing-up-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'sign-up',
    component: SingUpPage
  }
];
