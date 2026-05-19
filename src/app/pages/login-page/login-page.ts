import { Component } from '@angular/core';
import {AuthLayoutComponent} from '../../components/auth-layout.component/auth-layout.component';

@Component({
  selector: 'app-login-page',
  imports: [AuthLayoutComponent],
  standalone: true,
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  public hidden = true;
}
