import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {Cardform} from './cardform/cardform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, Cardform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('creditcard');
}
