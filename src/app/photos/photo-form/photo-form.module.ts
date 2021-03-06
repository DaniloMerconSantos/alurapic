import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { PhotoFormComponent } from './photo-form.component';
import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule
  ]
})
export class PhotoFormModule {}