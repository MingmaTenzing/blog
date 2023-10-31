import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/sanity/types';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.css']
})
export class BlogContainerComponent {
  @Input() post!:Blog;

}
