import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CareerService } from '../career.service';

@Component({
  selector: 'app-apply-popup',
  templateUrl: './apply-popup.component.html',
  styleUrls: ['./apply-popup.component.scss']
})
export class ApplyPopupComponent implements OnInit {

  @Input() popupObj = ""
  @Output() closePopup = new EventEmitter<string>();

  appliedJobs
  appliedPositions

  candidate = {
    name:"",
    email:"",
    phone:"",
    resume:""
  }

  close() {
    this.closePopup.emit()
  }

  submit(){
    if(this.candidate.name != "" && this.candidate.email != "" && this.candidate.phone != "" && this.candidate.resume != ""){
      this.appliedJobs = Object.assign(this.popupObj, this.candidate);
      this.career.appliedPositions.unshift(this.appliedJobs)
      this.closePopup.emit()
    }
    else{
      alert("Invalid Inputs")
    }
  }

  constructor(private career:CareerService) { }

  ngOnInit() {
  }

  // showData() {
  //   this.career.getUsers()
  //     .subscribe((data) => {this.career.appliedPositions = data.arr})
  // }

}
