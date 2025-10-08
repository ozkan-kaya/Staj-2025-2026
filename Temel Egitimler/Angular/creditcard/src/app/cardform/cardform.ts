import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {InputField} from '../input-field/input-field';
import {ExpDateFormControl} from '../exp-date-form-control';

@Component({
  selector: 'app-cardform',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    InputField,
  ],
  templateUrl: './cardform.html',
  styleUrl: './cardform.css'
})
export class Cardform {
  nameControl = new FormControl(null, {
    validators: [Validators.required, Validators.minLength(3)],
  });
  cardControl = new FormControl(null, {
    validators: [Validators.required, Validators.minLength(16), Validators.maxLength(16)],
  });
  expirationControl = new ExpDateFormControl(null, {
    validators: [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)],
  });
  cvvControl = new FormControl(null, {
    validators: [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
  });

  cardForm = new FormGroup({
    name: this.nameControl,
    card: this.cardControl,
    expiration: this.expirationControl,
    cvv: this.cvvControl,
  });

  resetForm() {
    this.cardForm.reset();
  }

  onSubmit() {
    console.log('Kart bilgileri kaydedildi');
  }

  protected readonly name = name;
}
