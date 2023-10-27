import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanityService } from '../sanity/sanity.service';
import { Observable } from 'rxjs';
import { Blog } from '../sanity/types';
import { SanityImagePipe } from '../sanity/sanity-image.pipe';
import { PortableTextPipe } from '../sanity/portable-text.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[]
})
export class PostComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private sanityService: SanityService,

  ) {}
  slug: string = '';
  post$!: Observable<Blog>;
  

  ngOnInit(): void {
    this.router.params.subscribe((param) => (this.slug = param['slug']));
    this.post$ = this.sanityService.getSinglePost(this.slug);

    
  }
}
