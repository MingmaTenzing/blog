import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { SanityService } from '../sanity/sanity.service';
import { Blog, category } from '../sanity/types';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private sanityService: SanityService,
    private router: ActivatedRoute
  ) {}

  categories$ = this.sanityService.getAllCategories();
  id!: string;
  title: string = '';
  blogs!: Observable<Blog[]>;
  isFollowing: boolean = false;
  private navigateRouter = inject(Router);


  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
      this.title = params['category'];
    });
    this.blogs = this.sanityService.getCategoryPosts(this.id);
  }

  follow() {
    this.isFollowing = !this.isFollowing;
  }
  fetchCategoryPosts(id:string, title:string) {
    this.navigateRouter.navigate(['category',`${title}`,`${id}`])
    this.blogs = this.sanityService.getCategoryPosts(id);

  }
}
