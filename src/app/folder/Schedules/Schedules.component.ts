import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-schedules',
  templateUrl: './Schedules.component.html',
  styleUrls: ['./Schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  date: string;
  type: 'string';



  constructor() { }
  
  ngOnInit() {
  };

   onChange($event) {
    console.log($event);

    console.log(this.date)
  }



}
