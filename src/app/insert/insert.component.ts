import { Component, OnInit } from '@angular/core';
import { Admin } from '../../Admin'
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private service:AdminService) { }
    t_flight_id : any;
    t_airline_id : any;
    t_airline_name : any; 
    t_from_location : any; 
    t_to_location : any;
    t_departure_time : any;
    t_arrival_time : any;
    t_duration : any;
    t_total_seats : any
  
  ngOnInit(): void {
  }

  insertAdminData(){
   let flights : Admin = {
    "flight_id" : this.t_flight_id,
    "airline_id" : this.t_airline_id,
    "airline_name" : this.t_airline_name, 
    "from_location" : this.t_from_location, 
    "to_location" : this.t_to_location, 
    "departure_time" : this.t_departure_time, 
    "arrival_time" : this.t_arrival_time, 
    "duration" : this.t_duration, 
    "total_seats" : this.t_total_seats
    }
   this.service.insertAdminData(flights);
  }
}
