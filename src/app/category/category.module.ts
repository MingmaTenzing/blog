import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';
import { HttpClientModule } from '@angular/common/http';
import { SanityClient } from '@sanity/client';
import { CategoryComponent } from './category.component';


@NgModule({
  declarations: [
CategoryComponent  ],

  imports: [
    CommonModule,
    CategoryRoutingModule,
    NgHeroiconsModule,
    HttpClientModule
  ]
})
export class CategoryModule { }
