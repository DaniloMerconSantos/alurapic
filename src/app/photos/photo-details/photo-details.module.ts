import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';



@NgModule({
  declarations: [ PhotoDetailsComponent, PhotoCommentsComponent ],
  exports: [ PhotoDetailsComponent, PhotoCommentsComponent ],
  imports: [
    CommonModule,
    PhotoModule, 
    RouterModule, 
    ReactiveFormsModule,
  ]
})
export class PhotoDetailsModule { }
