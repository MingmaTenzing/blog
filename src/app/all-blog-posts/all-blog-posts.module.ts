import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBlogPostsComponent } from './all-blog-posts.component';
import { BlogContainerModule } from '../small-components/blog-container/blog-container.module';



@NgModule({
  declarations: [
    AllBlogPostsComponent
  ],
  imports: [
    CommonModule,
    BlogContainerModule
  ],
  exports:[AllBlogPostsComponent]
})
export class AllBlogPostsModule { }
