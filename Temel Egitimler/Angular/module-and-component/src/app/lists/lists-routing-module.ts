import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListsHome} from './lists-home/lists-home';

const routes: Routes = [
  {path:'', component: ListsHome }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
