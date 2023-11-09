import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [{ path: ':category/:id', component: CategoryComponent },
{path:"", redirectTo:"/home", pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
