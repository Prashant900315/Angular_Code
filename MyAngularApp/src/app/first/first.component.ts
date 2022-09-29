import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  credentials={
    username : '',
    password : ''
  };
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(WelcomeComponent, {
      width: '600px',
      data: 'Add Post'
    });

}
}
