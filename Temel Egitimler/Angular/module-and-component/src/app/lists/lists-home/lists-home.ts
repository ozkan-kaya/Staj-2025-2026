import { Component } from '@angular/core';
import { Statistics } from '../statistics/statistics';
import { Divider } from '../../shared/divider/divider';
import {ItemList} from '../item-list/item-list';

@Component({
  selector: 'app-lists-home',
  imports: [
    Statistics,
    Divider,
    ItemList
  ],
  templateUrl: './lists-home.html',
  styleUrl: './lists-home.css'
})
export class ListsHome {
  numbers = [
    {value: 50, label: 'Musteri'},
    {value: 3500, label: 'Ciro'},
    {value: 65, label: 'Yorumlar'},
  ]

  images: {src:string, title: string, description: string}[] = [
    {src: 'images/dresser.jpeg', title: 'Sifonyer', description: 'Her turlu esyanizi koyabileceginiz sifonyer.'},
    {src: 'images/couch.jpeg', title: 'Kanepe', description: 'Efsanevi rahat koltuk.'}
  ]
}
