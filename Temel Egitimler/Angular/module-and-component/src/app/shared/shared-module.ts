import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Divider } from './divider/divider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Divider
  ],
  exports: [
    Divider
  ]
})
export class SharedModule { }
