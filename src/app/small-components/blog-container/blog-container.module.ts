import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogContainerComponent } from './blog-container.component';



@NgModule({
  declarations: [
    BlogContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BlogContainerComponent]
})
export class BlogContainerModule { }
