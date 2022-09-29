import { Component, EventEmitter, Inject ,OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataService } from '../data.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  blogPost = {
    title: '',
    body: '',
    category: '',
    position: 0,
    date_posted: new Date()
  };
  public event: EventEmitter<any> = new EventEmitter();
  constructor( public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.blogPost.position = this.dataService.dataLength();
    this.event.emit({data: this.blogPost});
    this.dialogRef.close();
  }
  categories = this.dataService.getCategories();
}
