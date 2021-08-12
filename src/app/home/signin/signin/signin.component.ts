import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/auth/auth.service';
import { PlatformDetectorService } from './../../../core/plataform-detector/plataform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit, AfterViewInit {

  loginForm!: FormGroup;
  @ViewChild('userNameInput')
  userNameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ) { }
    
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
    
    ngAfterViewInit(): void {
      this.platformDetectorService.isPlatFormBrowser() &&
        this.userNameInput.nativeElement.focus();
    }
    
  login(){
    const user = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value
    this.authService
        .authenticate(user, password)
        .subscribe(
          ()=> this.router.navigate(['user', user]),
          err => {
            console.log(err);
            this.loginForm.reset();
            this.platformDetectorService.isPlatFormBrowser() && 
              this.userNameInput.nativeElement.focus();
            alert('Invalid user name or password');
          }
        );
  }
}
