import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AllBlogPostsComponent } from './all-blog-posts/all-blog-posts.component';
import { RecentblogsComponent } from './recentblogs/recentblogs.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BlogContainerModule } from '../small-components/blog-container/blog-container.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [HomeComponent, AllBlogPostsComponent, RecentblogsComponent],
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
