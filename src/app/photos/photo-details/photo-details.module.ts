import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';



@NgModule({
  declarations: [ PhotoDetailsComponent ],
  exports: [ PhotoDetailsComponent ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoDetailsModule { }
