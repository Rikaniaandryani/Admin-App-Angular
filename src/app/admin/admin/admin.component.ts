import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  events: string[] = [];
  // opened: boolean;



  constructor() { 

  const opened: boolean = true;
  }

  ngOnInit(): void {
  }

}
