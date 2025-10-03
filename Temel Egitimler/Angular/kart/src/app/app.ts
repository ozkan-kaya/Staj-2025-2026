import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Card} from './card/card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('kart');
  posts = [
    {
      title: 'Dag Bisikleti',
      imageUrl: 'assets/biking.jpeg',
      username: 'cbdag',
      content: 'Hizli surdum.'
    },
    {
      title: 'Tirmanis',
      imageUrl: 'assets/mountain.jpeg',
      username: 'cbuludag',
      content: 'iyi tirmandim.'
    },
    {
      title: 'Doga Yuruyusu',
      imageUrl: 'assets/tree.jpeg',
      username: 'cbdoga',
      content: 'Biraz turlayalim.'
    },
  ]
}
