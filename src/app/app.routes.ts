import { Routes } from '@angular/router';
import {LoginPage} from './pages/login-page/login-page';
import {SingUpPage} from './pages/sing-up-page/sing-up-page';
import {WelcomePage} from './pages/wellcome-page/welcome-page';
import {CreateCharacter} from './pages/create-character/create-character';

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
  },
  {
    path: 'welcome-page',
    component: WelcomePage
  },
  {
    path: 'create-character',
    component: CreateCharacter
  }
];
