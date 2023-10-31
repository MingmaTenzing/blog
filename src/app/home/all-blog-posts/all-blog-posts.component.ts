import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, Input, OnInit, inject } from '@angular/core';
import { SanityService } from 'src/app/sanity/sanity.service';
import { Blog } from 'src/app/sanity/types';

@Component({
  selector: 'app-all-blog-posts',
  templateUrl: './all-blog-posts.component.html',
  styleUrls: ['./all-blog-posts.component.css']
})
export class AllBlogPostsComponent {

  post$ = inject(SanityService).getAllPosts();

  


}
