import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PortableTextPipe } from '../sanity/portable-text.pipe';
import { SanityImagePipe } from '../sanity/sanity-image.pipe';


@NgModule({
  declarations: [
    PostComponent,
    SanityImagePipe,
    PortableTextPipe
  ],
  imports: [
    CommonModule,
    PostRoutingModule],
    providers:[SanityImagePipe, PortableTextPipe],
  exports:[]
})
export class PostModule { }
