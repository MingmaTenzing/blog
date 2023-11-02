import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PortableTextPipe } from '../sanity/portable-text.pipe';
import { SanityImagePipe } from '../sanity/sanity-image.pipe';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostLoadingComponent } from './post-loading/post-loading.component';
import { ReadingTimePipe } from './reading-time.pipe';

@NgModule({
  declarations: [PostComponent, SanityImagePipe, PortableTextPipe, PostLoadingComponent, ReadingTimePipe],
  imports: [CommonModule, PostRoutingModule, NgxSkeletonLoaderModule],
  providers: [SanityImagePipe, PortableTextPipe,],
  exports: [],
})
export class PostModule {}
