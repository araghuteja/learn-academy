import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {


  completionPercentage: number = 90;
  author: string = 'Shishir Das';
  title: string[] = ['Analog', 'Electronics'];
  videosCount: number = 175;

  subjectDuration = {
    hours: 63,
    minutes: 32,
    seconds: 22
  }

  primaryColor: string = "purple";
  secondaryColor: string = "#1a3aa1";

  constructor() { 
  }

  setMaskValueBasedOnPercentage () {
    return 450 - Math.round( 400 * this.completionPercentage / 100);
  }

  ngOnInit() {   
  }

}
