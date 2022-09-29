import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { config } from '../../app/config';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  // public baseUrl:String ="http://localhost:8090";

  constructor(private http: HttpClient) { }
  baseUrl:String= config.backendAPIBaseURL;
  moduleUrl:String=config.sendTestEmail;
   
  sendEmail(data:any){
    const body='{"data":"'+data+'"}';
    Swal.fire("datataaa="+this.baseUrl+"data="+data);
    return this.http.post(this.baseUrl+"sendEmail",data);
    //return this.http.post(`${this.baseUrl}/sendEmail`,data);

  }
  // getLoanDetails(dealId) {
  //   // console.log("In getLoanDetails");    
  //   const body='{"dealId":"'+dealId+'"}';
  //   return this.http.post(this.baseUrl+this.moduleURL+"mappedLoan",body);
  // }
}
