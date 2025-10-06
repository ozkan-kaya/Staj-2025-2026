import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholdersHome } from './placeholders-home/placeholders-home';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlaceholdersHome,
    SharedModule
  ],
  exports: [
    // PlaceholdersHome
  ]
})
export class PlaceholdersModule { }
