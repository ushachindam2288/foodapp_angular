import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { user } from 'src/models/model';
// interface order {
//   name: string;
//   quantity: string;
  

// }
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // order: order = {
  //   name: '',
  //   quantity:''
    
  // };


  // constructor(public http: HttpClient, public router:Router) { }


  // insertorder(orderdata: string): Observable<any> {
    //  this.order contains the data you want to send in the request body

    // Replace the URL with your actual API endpoint
    // const url = 'http://localhost:8080/updateorder';

    // Assuming this.order contains the data you want to send in the request body
    // const requestData = this.order;

    // Send the POST request with requestData as the request body
  //   return this.http.post<any>(url,this.order);
  // } 

  // Getorderlist(){
  //   var url= "http://localhost:8080/orderlist";
  //   return this.http.get(url).subscribe(data=>{
  //   return data;
  //   });
  //   }
}

