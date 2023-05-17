import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private http: HttpClient) { }

  private positionsUrl = 'assets/open-position.json'

  openPositions=[
    {
      jobID:"001",
      role:"Full Stack Developer",
      location:"India",
      exp:"2"
    },
    {
      jobID:"002",
      role:"Junior Software Engineer",
      location:"India",
      exp:"0"
    },
    {
      jobID:"003",
      role:"Product Manager",
      location:"India",
      exp:"2"
    },
    {
      jobID:"004",
      role:"Angular Developer",
      location:"India",
      exp:"2"
    },
    {
      jobID:"005",
      role:"Technology Lead",
      location:"India",
      exp:"5"
    },
    {
      jobID:"006",
      role:"Software Engineer",
      location:"USA",
      exp:"2"
    },
    {
      jobID:"007",
      role:"Human Resource",
      location:"India",
      exp:"2"
    },
    {
      jobID:"008",
      role:"Business Development Associate",
      location:"India",
      exp:"1"
    },
    {
      jobID:"009",
      role:"Backend Developer",
      location:"India",
      exp:"2"
    },
    {
      jobID:"010",
      role:"Intern",
      location:"India",
      exp:"0"
    },
  ]

  appliedPositions = []

  getUsers(): Observable<any> {
    return this.http.get(this.positionsUrl)
  }
}
