import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent implements OnInit {

  constructor(private service: AdminService) { }
  result :string="";
  t_flight_id:number = 0;

  ngOnInit(): void {
  }

  deleteAdminData(){
    this.service.deleteAdminData(this.t_flight_id);
    this.result="Data Deleted Successfully !!!";
  }
}
