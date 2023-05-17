import { Component, OnInit } from '@angular/core';

import {CareerService} from "./../career.service"

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  constructor( private career :CareerService) { }

  ngOnInit() {
  }

  searchInput=""
  selected=""
  isVisible=false
  popupObj

  openPositions = this.career.openPositions
  appliedPositions 
  result
  searchPosition(value,country){
    this.result = this.career.openPositions.filter((obj) => JSON.stringify(obj).toLowerCase().includes(value.toString().toLowerCase()));
    this.result = this.result.filter((obj) => JSON.stringify(obj).toLowerCase().includes(country.toString().toLowerCase()));
    this.openPositions = this.result
  };

  openPopup(row){
    this.popupObj=row
    this.isVisible=true
    console.log(row)
  }

  closePopup(){
    this.isVisible=false
  }

  
}
