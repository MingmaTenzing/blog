import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BlogContainerComponent } from './blog-container.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlogContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage
  ],
  exports:[BlogContainerComponent],
})
export class BlogContainerModule { }
