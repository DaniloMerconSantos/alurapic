import { NgModule } from '@angular/core';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  imports: [
    PhotoModule,
    PhotoListModule,
    PhotoFormModule,
    PhotoDetailsModule
  ]
})
export class PhotosModule { }
