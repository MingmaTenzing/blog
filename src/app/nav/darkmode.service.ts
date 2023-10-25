import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  constructor() { }

  isDarkModeEnabled : boolean = false;

  changeTheme() {
    this.isDarkModeEnabled = !this.isDarkModeEnabled;
    document.body.classList.toggle("dark-theme")
  }

}
