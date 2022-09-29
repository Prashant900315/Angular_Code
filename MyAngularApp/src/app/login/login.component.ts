
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginserviceService } from '../service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username : '',
    password : ''
  };
  // public loginValid = true;
  // public username = '';
  // public password = '';
   hide = true;
  constructor(private snack: MatSnackBar,private loginservice: LoginserviceService,
    private router: Router) { 
    
  }

  ngOnInit(): void {
  }
//   public onSubmit(): void {
//     this.loginValid = true;
// }
onSubmit(){
  //console.log("submitted form");
 
  if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.password!=null && 
    this.credentials.password!=null)){
      console.log("We have to submit form o server.")
      //tocken generate
      this.loginservice.generateToken(this.credentials.username,this.credentials.password).subscribe(
        (data:any)=>{
          //sucess
               console.log(data.tocken);

               this.loginservice.loginUser(data.tocken);
               window.location.href="/dashboard";
               //this.router.navigate(['/']);

        },
        error=>{
          //error
          console.log(error);
          Swal.fire("error="+error);
        }
        
      );


    }else{
      Swal.fire("Fields are required.");
    }
}
login(){

  this.snack.open("logi8n here","ok");

}
}
