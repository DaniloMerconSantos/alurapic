import { RouterModule } from '@angular/router';
import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { NgModule } from "@angular/core";
import { PhotoListComponent } from "./photo-list.component";

@NgModule({
  declarations: [
    PhotoListComponent, 
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule, 
    CardModule,
    DarkenOnHoverModule,
    RouterModule
  ]
})
export class PhotoListModule {}