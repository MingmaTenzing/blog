import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { AllBlogPostsComponent } from './all-blog-posts/all-blog-posts.component';
import { RecentblogsComponent } from './recentblogs/recentblogs.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BlogContainerModule } from '../small-components/blog-container/blog-container.module';
import { HeaderModule } from '../header/header.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HomeLoadingComponent } from './home-loading/home-loading.component';

@NgModule({
  declarations: [HomeComponent, AllBlogPostsComponent, RecentblogsComponent, HomeLoadingComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    BlogContainerModule,
    HeaderModule,
  ],
  exports: [],
})
export class HomeModule {}
