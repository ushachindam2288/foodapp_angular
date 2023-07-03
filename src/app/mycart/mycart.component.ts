import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
interface Order {
  name: string;
  quantity: string;}
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {

    order: Order = {
    name: '',
    quantity:''
  };
   
  constructor(public http: HttpClient, public router:Router,public foodservice: FoodService) { }
  
  ngOnInit(): void {
    var list =this.Getorderlist();
   
     console.log('this is order list'+ list);
  }

  submitForm(): void {
    this.http.post('http://localhost:8080/updateorder',this.order)
    //this.http.post('http://localhost:62024/api/insertuser', this.user)
      .subscribe(
        () => {
          console.log('Order details submitted successfully');
          console.log('Order:', this.order);
          this.router.navigate(['/orderconfirmed'])
          // You can perform further actions here, such as displaying a success message or redirecting to another page
        },
        error => {
          console.error('Failed to submit Order details', error);
          // Handle error scenarios here, such as displaying an error message to the user
        }
      );
  }

  Getorderlist(){
     var url= "http://localhost:8080/orderlist";
      return this.http.get(url).subscribe(data=>{
      return data;
      });
      }









 
  //         submitForm(){ 
  //           console.log(this.order)  
           
  //           this.foodservice.insertorder(this.orderdata).subscribe((data)=> 
  //           {console.log(data);
  //         console.log('order details submitted successfully'); 
  //         console.log('order:', this.order);
  //         this.router.navigate(['/orderconfirmed'])
          
  //       },
  //             (error: any) => {
  //         console.error('Failed to submit order details', error);
         
  //       }
  //     );
  // }   
}
