import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BlogContainerComponent } from './blog-container.component';
import { PortableTextPipe } from 'src/app/sanity/portable-text.pipe';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    BlogContainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  exports:[BlogContainerComponent],
  providers:[]
})
export class BlogContainerModule { }
