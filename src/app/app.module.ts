
import { AppRoutingModule } from './app-routing.module';
import { PhotosModule } from './photos/photos.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/errors.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule, 
    ErrorsModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
