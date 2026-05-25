import { Component } from '@angular/core';
import {AuthLayoutComponent} from '../../components/auth-layout.component/auth-layout.component';
import {RouterLink} from '@angular/router';
import {Logo} from '../../components/logo/logo';

@Component({
  selector: 'app-sing-up-page',
  imports: [AuthLayoutComponent, RouterLink, Logo],
  standalone: true,
  templateUrl: './sing-up-page.html',
  styleUrl: './sing-up-page.scss',
})
export class SingUpPage {
  public hidden = true;
  protected readonly RouterLink = RouterLink;
}
