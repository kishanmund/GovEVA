import { Component, OnInit } from '@angular/core';
import { CareerService } from '../career.service';

@Component({
  selector: 'app-applied-positions',
  templateUrl: './applied-positions.component.html',
  styleUrls: ['./applied-positions.component.scss']
})
export class AppliedPositionsComponent implements OnInit {

  constructor(private career:CareerService) { }

  appliedPositions

  ngOnInit() {
    this.appliedPositions = this.career.appliedPositions
  }

  tableHeaders=[
    "Job ID",
    "Name",
    "Phone Number",
    "E-Mail",
    "Role",
    "Experience",
    "Location",
    "Resume"
  ]

  // showData() {
    
  // }


}
