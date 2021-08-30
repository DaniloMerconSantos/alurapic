import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { PhotosModule } from './photos/photos.module';
import { AppComponent } from './app.component';

import { ErrorsModule } from './errors/errors.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './shared/components/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    CoreModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
