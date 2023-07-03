import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface User {
  name: string;
  address: string;
  email:string;  
  password: string;

}
@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {   
  user: User = {
    name: '',
    address:'',
    email:'',
    password: ''
    
  };
  constructor(private http: HttpClient,public router:Router) {}
  submitForm(): void {
    this.http.post('http://localhost:8080/customerupdates', this.user)
    //this.http.post('http://localhost:62024/api/insertuser', this.user)
      .subscribe(
        () => {
          console.log('User details submitted successfully');
          console.log('User:', this.user);
          this.router.navigate(['/loginpage'])
          // You can perform further actions here, such as displaying a success message or redirecting to another page
        },
        error => {
          console.error('Failed to submit user details', error);
          // Handle error scenarios here, such as displaying an error message to the user
        }
      );
  }
}




  