import { Component } from '@angular/core';
import {Placeholders} from '../placeholders/placeholders';
import {Divider} from '../../shared/divider/divider';
import {Segment} from '../segment/segment';

@Component({
  selector: 'app-placeholders-home',
  imports: [
    Placeholders,
    Placeholders,
    Divider,
    Segment
  ],
  templateUrl: './placeholders-home.html',
  styleUrl: './placeholders-home.css'
})
export class PlaceholdersHome {

}
