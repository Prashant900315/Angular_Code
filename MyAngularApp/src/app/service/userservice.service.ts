import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
 // baseUrl:String= config.tokenUrl;
 
 baseUrl:String= 'http://localhost:9595';

  getUsers(){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.get(this.baseUrl+"/getUsers",{headers: headers});
  }
}
