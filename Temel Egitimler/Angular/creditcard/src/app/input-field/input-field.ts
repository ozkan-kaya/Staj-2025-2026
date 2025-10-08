import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-input-field',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css'
})
export class InputField {
  @Input() control!: FormControl;
  @Input() label!: string;

  isValid() {
    const {dirty, touched, errors} = this.control;
    return !(dirty && touched && errors);
  }
}
