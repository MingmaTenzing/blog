import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from './darkmode.service';
import { fadeInDownAnimation, fadeInDownOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, fadeOutUpOnLeaveAnimation } from 'angular-animations';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
fadeInDownOnEnterAnimation({duration:200}), fadeOutUpOnLeaveAnimation({duration:200})
  ]
 
})
export class NavComponent implements OnInit {
  constructor( private darkmode:DarkmodeService) {}
isModalOpen:boolean = false;
theme:boolean = false;
  ngOnInit(): void {
      console.log(this.theme)
  }
switchTheme() {
    this.darkmode.changeTheme(this.theme);


  }
  
  changeModalState() {
    this.isModalOpen = !this.isModalOpen;

    console.log(this.isModalOpen)
  }



}
