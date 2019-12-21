import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/shared/models/subject.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  analogElectronics: Subject = {
    completionPercentage: 90,
    author: 'Shishir Das',
    title: ['Analog', 'Electronics'],
    videosCount: 175,

    subjectDuration: {
      hours: 63,
      minutes: 32,
      seconds: 22
    },

    primaryColor: "purple",
    secondaryColor: "#1a3aa1"
  }
  
  constructor() { }

  ngOnInit() {

  }

}
