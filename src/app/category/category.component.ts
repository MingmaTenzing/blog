import { Component, OnInit, inject } from '@angular/core';
import { SanityService } from '../sanity/sanity.service';
import { Category } from '../sanity/types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
constructor( private sanityService: SanityService, private router:ActivatedRoute) {}

categories$ = this.sanityService.getAllCategories();
slug!:string;
ngOnInit(): void {
  this.router.params.subscribe(params => this.slug = params["slug"])
  console.log(this.slug)
    
}
}
