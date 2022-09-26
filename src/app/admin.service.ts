import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Admin } from '../Admin' ;
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient : HttpClient) { }

  displayAdminDetails(){
    return this.httpClient.get("http://localhost:8088/adminservice/admin/display");
  }

  displayPassengerDetails(){
    return this.httpClient.get("http://localhost:8088/adminservice/admin/passenger/all");
  }

  insertAdminData(flights :any){
    this.httpClient.post("http://localhost:8081/admin/add",flights)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  deleteAdminData(flight_id : number){
    this.httpClient.delete("http://localhost:8081/admin/delete/"+flight_id)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
