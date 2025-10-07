import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesHome } from './tables-home/tables-home';
import {Biography} from './biography/biography';
import {Companies} from './companies/companies';
import {Partners} from './partners/partners';

const routes: Routes = [
  {path: '', component: TablesHome,
    children: [
      {path:'', component: Biography},
      {path:'companies', component: Companies},
      {path:'partners', component: Partners},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
