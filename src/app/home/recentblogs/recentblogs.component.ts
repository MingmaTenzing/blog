import { Component, Input, OnInit, inject } from '@angular/core';
import { SanityService } from 'src/app/sanity/sanity.service';
import { Blog } from 'src/app/sanity/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recentblogs',
  templateUrl: './recentblogs.component.html',
  styleUrls: ['./recentblogs.component.css'],
})
export class RecentblogsComponent{
  
 blog$ = inject(SanityService).getAllPosts();

 

  // async getPosts(): Promise<Blog[]>  {
  //   this.loading = true;
  //    this.blog = await this.sanityService.getAllPosts();

  //    console.log(this.blog);
  //    this.loading=false;
  //    return this.blog;

  // }
}
