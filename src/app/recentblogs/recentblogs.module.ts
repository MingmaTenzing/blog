import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentblogsComponent } from './recentblogs.component';



@NgModule({
  declarations: [
    RecentblogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RecentblogsComponent]
})
export class RecentblogsModule { }
