import { Component, Input, OnInit, inject } from '@angular/core';
import { SanityService } from 'src/app/sanity/sanity.service';
import { Blog } from 'src/app/sanity/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recentblogs',
  templateUrl: './recentblogs.component.html',
  styleUrls: ['./recentblogs.component.css'],
})
export class RecentblogsComponent {
  blog$ = inject(SanityService).getAllPosts();

  number: number = 1;

  // async getPosts(): Promise<Blog[]>  {
  //   this.loading = true;
  //    this.blog = await this.sanityService.getAllPosts();

  //    this.loading=false;
  //    return this.blog;

  // }
}
