import { Component, OnInit } from '@angular/core';

declare function customInit(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    customInit();
    const linkTheme = document.querySelector('#theme');
    const storagedTheme = localStorage.getItem('theme') ||  './assets/css/colors/default.css'; 
    
    linkTheme?.setAttribute('href', storagedTheme);
  }

}
