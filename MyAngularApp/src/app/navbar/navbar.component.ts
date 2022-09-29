import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../service/loginservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedin=false;

  constructor(private loginservice: LoginserviceService) { }

  ngOnInit(): void {
    this.loggedin=this.loginservice.isLogin();
  }
  logout(){
    //alert("ok");
    this.loginservice.logOut();
    location.reload()

  }
  user(){

  }
}
