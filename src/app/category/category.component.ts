import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { SanityService } from '../sanity/sanity.service';
import { Blog } from '../sanity/types';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

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
  isFollowing: boolean = true;
  private navigateRouter = inject(Router);
  private htmlTitle = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
      this.title = params['category'];
      this.htmlTitle.setTitle(params['category']);
      this.meta.updateTag({
        property: 'og:title',
        content: 'Mingma Tenzing Blog Categories ',
      });

      this.meta.updateTag({
        name: 'description',
        content:
          'Wide Range of stroies to read from Mingma Tenzing Sherpa, including Tech Review, Coding Journey, Tech Events and more ',
      });

      this.meta.updateTag({
        property: 'og:description',
        content:
          'Wide Range of stroies to read from Mingma Tenzing Sherpa, including Tech Review, Coding Journey, Tech Events and more ',
      });
    });

    this.blogs = this.sanityService.getCategoryPosts(this.id);
  }

  follow() {
    this.isFollowing = !this.isFollowing;
  }
  fetchCategoryPosts(id: string, title: string) {
    this.navigateRouter.navigate(['category', `${title}`, `${id}`]);
    this.blogs = this.sanityService.getCategoryPosts(id);
  }
}
