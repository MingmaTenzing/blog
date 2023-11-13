import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    MatButtonModule,
    _MatSlideToggleRequiredValidatorModule,
    FormsModule,
    MatCardModule,
  ],
  exports: [NavComponent],
})
export class NavModule {}
