import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']

})
export class LoginpageComponent implements OnInit {
  
  name:any;
  password:any;
  user:any;
  constructor(public loginService:LoginService,public router:Router ){}

  ngOnInit(): void {

    var list =this.loginService.Getuserlist();
    // var list =this.loginService.Getcustomerlist();
    console.log('this is customers list'+ list);
    
  }  
//------------------------------------------------------------------
   //verify
   login(){ 
    console.log(this.name)  
   
    //verify
    this.loginService.VerifyLogin(this.name).subscribe((data)=> 
    {console.log(data);
   
   if(data.id== 0){
     alert('user does not exists');
   }
   else{
     this.router.navigate(['/menupage']);   
   }
   },
   (error:any)=> {
     console.log(error);
   });
   
  }  

//    submitForm(){
//   this.loginService.registeruser(this.user).subscribe(
//     (Response: any) =>{
//       console.log('you registered successfully');
//     },
//     ( error: any)=>{
//       console.error('failed to register',error);
//     }
//   );
// }
}
//------------------------------------------------------------

