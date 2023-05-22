import { Component, OnInit } from "@angular/core";
import { CareerService } from "./career.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "GovEVA";

  constructor(private career:CareerService){
    this.career.getUsers()
    .subscribe((data) => {this.career.appliedPositions = data.arr})
  }

 
  
}
