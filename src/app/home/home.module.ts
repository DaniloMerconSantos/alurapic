import { SignUpService } from './signup/signup.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [ 
    HomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    HomeRoutingModule
 ],
 providers: [ 
   SignUpService 
]
})
export class HomeModule { }
