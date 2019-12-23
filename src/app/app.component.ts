import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'learn-academy';
  opened: boolean;
  expandHeight = '42px';
  collapseHeight = '42px';

  toggleSideNav() {
    this.opened = !this.opened;
  }

}
