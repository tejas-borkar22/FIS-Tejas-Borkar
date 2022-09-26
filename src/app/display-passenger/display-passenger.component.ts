import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-display-passenger',
  templateUrl: './display-passenger.component.html',
  styleUrls: ['./display-passenger.component.css']
})
export class DisplayPassengerComponent implements OnInit {

  constructor(private service:AdminService) { }
  passengers: any
  displayPassengerDetails(){
     this.service.displayPassengerDetails()
     .subscribe( response =>{
       this.passengers=response;
       console.log(response);
     }
     );
   }
   
  ngOnInit(): void {
  }

}
