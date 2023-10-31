import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  constructor() { }



  changeTheme(theme: boolean) {
  

    document.body.classList.toggle("dark-theme")
  }



}
