import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snack: MatSnackBar,public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  btnClick(){
    console.log("this is snack bar");
    this.snack.open("Hey welcome to this app","cancel")
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(WelcomeComponent, {
      width: '600px',
      data: 'Add Post'
    });
}
}
