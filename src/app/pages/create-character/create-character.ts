import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {Logo} from '../../components/logo/logo';

@Component({
  selector: 'create-character',
  standalone: true,
  imports: [CommonModule, RouterLink, Logo],
  templateUrl: './create-character.html',
  styleUrl: './create-character.scss'
})
export class CreateCharacter {
  public selectedCharacteristic: string = '';
  public selectedGender: string = '';
}
