import { Component } from '@angular/core';
import { DarkmodeService } from './darkmode.service';
import { fadeInDownAnimation, fadeInDownOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, fadeOutUpOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
fadeInDownOnEnterAnimation({duration:200}), fadeOutUpOnLeaveAnimation({duration:200})
  ]
 
})
export class NavComponent {
  constructor( private darkmode:DarkmodeService) {}
isModalOpen:boolean = false;
  switchTheme() {
    this.darkmode.changeTheme();
  }
  
  changeModalState() {
    this.isModalOpen = !this.isModalOpen;

    console.log(this.isModalOpen)
  }


}
