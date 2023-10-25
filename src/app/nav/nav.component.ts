import { Component } from '@angular/core';
import { DarkmodeService } from './darkmode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
 
})
export class NavComponent {
  constructor( private darkmode:DarkmodeService) {}

  switchTheme() {
    this.darkmode.changeTheme();
  }

color:string = "#000000"
}
