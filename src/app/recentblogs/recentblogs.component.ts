import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful/contentful.service';
import { TypeBlogFields } from '../contentful/types';


@Component({
  selector: 'app-recentblogs',
  templateUrl: './recentblogs.component.html',
  styleUrls: ['./recentblogs.component.css']
})
export class RecentblogsComponent implements OnInit {
  constructor( private blogservice:ContentfulService){}
  
  ngOnInit(): void {
      this.blogservice.getBlogs();
  }

}
