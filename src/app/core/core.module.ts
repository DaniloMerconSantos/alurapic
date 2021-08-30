import { RequestInterceptor } from './auth/request.interceptor';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from './../shared/components/alert/alert.module';
import { LoadingModule } from './../shared/components/loading/loading.module';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ 
    HeaderComponent, 
    FooterComponent 
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent
   ],
  imports: [ 
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule
   ],
   providers: [
     {
       provide: HTTP_INTERCEPTORS,
       useClass: RequestInterceptor,
       multi: true
     }
   ]
})
export class CoreModule { }
