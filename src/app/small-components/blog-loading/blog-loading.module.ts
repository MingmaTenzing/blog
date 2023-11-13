import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogLoadingComponent } from './blog-loading.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [BlogLoadingComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule],
  exports: [BlogLoadingComponent],
})
export class BlogLoadingModule {}
