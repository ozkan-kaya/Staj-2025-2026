import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('password');

  password:string = "";
  length:number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
    console.log('include letters:',this.includeLetters);
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log('include numbers:',this.includeNumbers);
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log('include symbols:',this.includeSymbols);
  }

  modifyLength(value:string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  buttonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

    let validChars = '';

    if (this.includeLetters) validChars += letters;

    if (this.includeNumbers) validChars += numbers;

    if (this.includeSymbols) validChars += symbols;

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
