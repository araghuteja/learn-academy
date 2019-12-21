import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'src/shared/models/subject.model';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

  @Input() subject: Subject;

  constructor() { 
  }

  setMaskValueBasedOnPercentage () {
    return 450 - Math.round( 400 * this.subject.completionPercentage / 100);
  }

  ngOnInit() {   
  }

}
