import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanityService } from '../sanity/sanity.service';
import { Blog } from '../sanity/types';

import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  constructor(
    private router: ActivatedRoute,
    private sanityService: SanityService,
    private meta: Meta,
    private title: Title
  ) {}
  slug: string = '';
  loading!: boolean;
  post!: Blog;
  subscription!: Subscription;

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.router.params.subscribe((param) => (this.slug = param['slug']));
    this.subscription = this.sanityService
      .getSinglePost(this.slug)
      .subscribe((data) => {
        this.post = data;
        if (this.post) {
          this.title.setTitle(this.post.title);
          this.meta.updateTag({
            property: 'og:title',
            content: `${this.post.title}`,
          });
          this.meta.updateTag({
            property: 'og:image',
            content: `${this.post.mainImage}`,
          });
          this.meta.updateTag({
            property: 'twitter:image',
            content: `${this.post.mainImage}`,
          });
          this.loading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
