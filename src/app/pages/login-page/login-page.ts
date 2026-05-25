import { Component } from '@angular/core';
import {AuthLayoutComponent} from '../../components/auth-layout.component/auth-layout.component';
import {RouterLink} from '@angular/router';
import {Logo} from '../../components/logo/logo';

@Component({
  selector: 'app-login-page',
  imports: [AuthLayoutComponent, RouterLink, Logo],
  standalone: true,
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  public hidden = true;
}
