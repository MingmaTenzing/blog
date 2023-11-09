import { Component, OnInit, inject } from '@angular/core';
import { SanityService } from '../sanity/sanity.service';
import { Blog } from '../sanity/types';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
constructor( private sanityService: SanityService, private router:ActivatedRoute) {}

categories$ = this.sanityService.getAllCategories();
id!:string;
blogs!:Observable<Blog[]>;

ngOnInit(): void {
this.router.params.subscribe(params => this.id = params["id"])
 this.blogs = this.sanityService.getCategoryPosts(this.id);   
console.log(this.id)
}

}
