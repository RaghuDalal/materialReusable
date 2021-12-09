import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-messages',
  templateUrl: './dialog-messages.component.html',
  styleUrls: ['./dialog-messages.component.css']
})
export class DialogMessagesComponent implements OnInit {
  heading?: string;
  subHeading?: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.heading = this.data.heading;
    this.subHeading = this.data.subHeading;
  }
}
