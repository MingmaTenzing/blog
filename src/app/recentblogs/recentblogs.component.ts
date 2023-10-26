import { Component, OnInit } from '@angular/core';
import { SanityService } from '../sanity/sanity.service';
import { Blog } from '../sanity/types';


@Component({
  selector: 'app-recentblogs',
  templateUrl: './recentblogs.component.html',
  styleUrls: ['./recentblogs.component.css']
})
export class RecentblogsComponent implements OnInit {

  constructor ( private sanityService: SanityService) {

  }

  blog!: Blog[];
  loading: boolean = false;

  
  ngOnInit(): void {
   this.getPosts()
   
   
    
   
  }

  async getPosts(): Promise<Blog[]>  {
    this.loading = true;
     this.blog = await this.sanityService.getAllPosts();

     console.log(this.blog);
     this.loading=false;
     return this.blog;

  }

}
