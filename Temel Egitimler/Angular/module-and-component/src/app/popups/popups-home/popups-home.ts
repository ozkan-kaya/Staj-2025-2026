import { Component } from '@angular/core';
import {Divider} from '../../shared/divider/divider';
import {Modal} from '../modal/modal';

@Component({
  selector: 'app-popups-home',
  imports: [
    Divider,
    Modal
  ],
  templateUrl: './popups-home.html',
  styleUrl: './popups-home.css'
})
export class PopupsHome {
  modalOpen = false;

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
