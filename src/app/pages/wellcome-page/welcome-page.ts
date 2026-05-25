import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Logo} from '../../components/logo/logo';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [RouterLink, Logo],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss'
})
export class WelcomePage {}
