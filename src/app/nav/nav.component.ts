import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from './darkmode.service';
import {
  fadeInDownAnimation,
  fadeInDownOnEnterAnimation,
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeOutUpOnLeaveAnimation,
} from 'angular-animations';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    fadeInDownOnEnterAnimation({ duration: 200 }),
    fadeOutUpOnLeaveAnimation({ duration: 200 }),
  ],
})
export class NavComponent implements OnInit {
  constructor(private darkmode: DarkmodeService, private router: Router) {}
  isModalOpen: boolean = false;
  theme: boolean = false;
  ngOnInit(): void {
    console.log(this.theme);
  }
  switchTheme() {
    this.darkmode.changeTheme(this.theme);
  }

  changeModalState() {
    this.isModalOpen = !this.isModalOpen;

    console.log(this.isModalOpen);
  }

  navigateTo(route: string) {
    this.router.navigate(['https://www.mingmatenzing.com/#projects']);
    console.log('sdfds');
  }
}
