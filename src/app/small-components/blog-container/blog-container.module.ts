import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogContainerComponent } from './blog-container.component';
import { PortableTextPipe } from 'src/app/sanity/portable-text.pipe';



@NgModule({
  declarations: [
    BlogContainerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[BlogContainerComponent],
  providers:[]
})
export class BlogContainerModule { }
