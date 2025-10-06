import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from '@angular/common';
import {First} from './first';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    NgClass,
    First
  ],
  styleUrl: './app.css'
})
export class App {
  currentPage:number = 0;
  images = [
    {
      title: 'Deniz',
      url: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Aycicegi',
      url: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Bulutlar',
      url: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Rolex',
      url: 'https://images.unsplash.com/photo-1709884732294-90379fee354c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Deniz',
      url: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Aycicegi',
      url: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Bulutlar',
      url: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Rolex',
      url: 'https://images.unsplash.com/photo-1709884732294-90379fee354c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Deniz',
      url: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Aycicegi',
      url: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Bulutlar',
      url: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Rolex',
      url: 'https://images.unsplash.com/photo-1709884732294-90379fee354c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Deniz',
      url: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Aycicegi',
      url: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Bulutlar',
      url: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Rolex',
      url: 'https://images.unsplash.com/photo-1709884732294-90379fee354c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D'
    },
  ];

  pageIndex(index:number) {
    return Math.abs(this.currentPage - index) < 5;
  }

}
