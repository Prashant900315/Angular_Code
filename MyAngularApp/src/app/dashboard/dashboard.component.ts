import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userservice: UserserviceService) { }

  ngOnInit(): void {
  }
  getUsers(){

    this.userservice.getUsers().subscribe(data=>{
      console.log(data);
    },
    error=>{
      //error
      console.log(error);
      Swal.fire("error="+error);
    }

   );

  }
}
