import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoService } from './../photo/photo.service';
import { UserService } from './../../core/user/user.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss'],
})
export class PhotoFormComponent implements OnInit {
  photoForm!: FormGroup;
  file!: File;
  preview!: string;
  percentDone = 0; 

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  changeFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.file = files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(this.file);
  }

  upload() {
    const description = this.photoForm?.get('description')?.value;
    const allowComments = this.photoForm?.get('allowComments')?.value;
    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe((event: HttpEvent<any>) => {
        if(event.type == HttpEventType.UploadProgress) {
          this.percentDone = event.total ? Math.round(100 * event.loaded / event.total) : 0;
        } else if(event instanceof  HttpResponse) {
          this.alertService.success('Add photo success!', true);
          this.router.navigate(['/user', this. userService.getUserName()]);
        }
      }, 
      err => {
        console.log(err);
        this.alertService.warning("Upload error!")
      });
  }
}
