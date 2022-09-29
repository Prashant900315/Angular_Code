import { Component, OnInit } from '@angular/core';
import { FormControl, Validators}  from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { EmailServiceService } from '../service/email-service.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  //value = 'Clear me';
  data={
    to:"",
    subject:"",
    msg:""
  }
  flag:boolean=false;
  constructor(private emailservice:EmailServiceService,private snack:MatSnackBar ) { 
  }

  ngOnInit(): void {
  }
  doSubmitForm()
  {
    console.log("data="+this. data.to);
    if(this.data.to=='' || this.data.subject=='' || this.data.msg==''){
      this.snack.open("Fields are required","ok");
      return;
   }
   this.flag=true;
   //Swal.fire("data==`"+this.data);
   this.emailservice.sendEmail(this.data).subscribe(
     response=>{
       console.log(response);
       this.flag=false;
       this.snack.open("send sucess","ok");
     },
     error=>{
       console.log(error);
       this.flag=false;
     }
     
   )
    }
  }
