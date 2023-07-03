import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  constructor(public http: HttpClient) { }
  baseurl = 'http://localhost:8080/'
  // baseurl = 'http://localhost:62024/'
   //apis caling   
 
   
   VerifyLogin(name: string):Observable<any>{
     var url= this.baseurl+'verifyuserlogin?name='+name; 
     return this.http.get(url);
     } 
 
    //  registeruser(userdata:any): Observable<any> {
    //    var url= this.baseurl+'api/insertuser';
    //    return this.http.post<any>(url, userdata);
  
    //  }
 
   Getuserlist(){
   var url= this.baseurl+'customerlist';
   return this.http.get(url).subscribe(data=>{
   return data;
   });
   }
  
   //GetorderList(){}
   //alluserupdates(s:user){}
  }
   
   
