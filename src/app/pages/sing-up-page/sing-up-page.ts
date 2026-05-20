import { Component } from '@angular/core';
import {AuthLayoutComponent} from '../../components/auth-layout.component/auth-layout.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sing-up-page',
  imports: [AuthLayoutComponent, RouterLink],
  standalone: true,
  templateUrl: './sing-up-page.html',
  styleUrl: './sing-up-page.scss',
})
export class SingUpPage {
  public hidden = true;
}
