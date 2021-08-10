import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin/signin.component';



@NgModule({
  declarations: [ SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule
 ]
})
export class HomeModule { }
