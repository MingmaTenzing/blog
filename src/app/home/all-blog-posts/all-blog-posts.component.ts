import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, Input, OnInit, inject, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SanityService } from 'src/app/sanity/sanity.service';
import { Blog } from 'src/app/sanity/types';

@Component({
  selector: 'app-all-blog-posts',
  templateUrl: './all-blog-posts.component.html',
  styleUrls: ['./all-blog-posts.component.css']
})
export class AllBlogPostsComponent implements OnInit, OnDestroy{
  private sanityService = inject(SanityService)
  componentDestroyed$: Subject<boolean> = new Subject();
  blogs!: Blog[];


  ngOnInit(): void {
      this.sanityService.getAllPosts().pipe(takeUntil(this.componentDestroyed$)).subscribe(data => {this.blogs = data.slice(0,6)})
      
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete()
  
  }


}
