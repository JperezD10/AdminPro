import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-page-found',
  templateUrl: './non-page-found.component.html',
  styleUrls: ['./non-page-found.component.css']
})
export class NonPageFoundComponent implements OnInit {

  fecha:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
