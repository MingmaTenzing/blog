import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category.component';
import { BlogContainerModule } from '../small-components/blog-container/blog-container.module';


@NgModule({
  declarations: [
CategoryComponent  ],

  imports: [
    CommonModule,
    CategoryRoutingModule,
    NgHeroiconsModule,
    HttpClientModule,
    BlogContainerModule,
  ]
})
export class CategoryModule { }
