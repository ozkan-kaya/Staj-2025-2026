import { Component } from '@angular/core';
import {Divider} from '../../shared/divider/divider';
import {Table} from '../table/table';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Tabs} from '../tabs/tabs';

@Component({
  selector: 'app-tables-home',
  imports: [
    Divider,
    Table,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Tabs
  ],
  templateUrl: './tables-home.html',
  styleUrl: './tables-home.css'
})
export class TablesHome {

}
