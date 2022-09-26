import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-display-admin',
  templateUrl: './display-admin.component.html',
  styleUrls: ['./display-admin.component.css']
})
export class DisplayAdminComponent implements OnInit {

  constructor(private service:AdminService) { }
  flights: any
  displayAdminDetails(){
     this.service.displayAdminDetails()
     .subscribe( response =>{
       this.flights=response;
       console.log(response);
     }
     );
   }
  ngOnInit(): void {
  }

}
