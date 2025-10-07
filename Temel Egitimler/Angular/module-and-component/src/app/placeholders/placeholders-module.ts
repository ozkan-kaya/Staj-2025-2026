import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholdersHome } from './placeholders-home/placeholders-home';
import { SharedModule } from '../shared/shared-module';
import {PlaceholdersRoutingModule} from './placeholders-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule,
    PlaceholdersHome,
    SharedModule
  ],
  exports: [
    // PlaceholdersHome
  ]
})
export class PlaceholdersModule { }
