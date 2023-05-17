import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  windowHeight = window.innerHeight;

  constructor() { }

  ngOnInit() {
  }

  getHeight() {
    const myStyles = {
      "height": this.windowHeight +"px",
    };
    return myStyles;
  }
}
