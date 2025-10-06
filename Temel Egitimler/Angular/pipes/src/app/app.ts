import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, TitleCasePipe} from '@angular/common';
import {ConvertToKMPipe} from './convert-to-km-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    ConvertToKMPipe,

  ],
  styleUrl: './app.css'
})
export class App {
  name:string = '';
  date = '';
  price: number = 0;
  height: number = 0;
  miles: number = 0;

  lessons = {
    name: 'Math',
    subject: 'Natural Numbers',
    currentPount: 65
  }

  onNameChange(value:string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onPriceChange(value: string) {
    this.price = parseFloat(value);
  }

  onHeightChange(value: string){
    this.height = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
