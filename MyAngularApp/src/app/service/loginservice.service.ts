import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

   

  constructor(private http: HttpClient) { }
  baseUrl:String= config.tokenUrl;
  //calling the server to generate token
  generateToken(username:String,password:String){
    //token generate
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    const body='{"username":"'+username+'","password":"'+password+'"}';
    //Swal.fire("datata="+this.baseUrl+"/tocken"+"username="+username+"password="+password);
    return this.http.post(this.baseUrl+"/tocken",body,{headers: headers});
  };
  
  
  
  //for user login
  loginUser(token: any){
    localStorage.setItem("token",token);
    return true;
  }

  isLogin(){
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token==null){
       return false;
  }else{
         return true;
    }
  }
  logOut(){
    localStorage.removeItem('token');
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }
}
