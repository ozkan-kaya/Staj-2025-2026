import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaceholdersHome} from './placeholders-home/placeholders-home';

const routes: Routes = [
  {path:'', component: PlaceholdersHome }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceholdersRoutingModule { }
