import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  randomText = faker.lorem.sentence();
  inputText= '';

  getInputVal(value:string) {
    this.inputText = value;
  }

  compare(randomLetter:string, inputLetter:string) {
    if (!inputLetter) {
      return '';
    }
    return randomLetter.toLowerCase() === inputLetter.toLowerCase() ? 'correct' : 'incorrect';
  }

}


