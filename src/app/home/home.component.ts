import { Component, OnInit, inject } from '@angular/core';
import { SanityService } from '../sanity/sanity.service';
import { Blog } from '../sanity/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  constructor( private SanityService: SanityService) {}

 
 blog$ = this.SanityService.getAllPosts();



}
