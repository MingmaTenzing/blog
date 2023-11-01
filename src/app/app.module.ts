import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent ],
  imports: [
    NavModule,
    BrowserAnimationsModule,
    HeaderModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HomeModule,
    
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
