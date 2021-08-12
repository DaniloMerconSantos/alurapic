import { Router } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from './../photo/photo.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm!: FormGroup;
  file!: File;
  preview!: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  changeFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.file = files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(this.file);
  }

  upload() {
    const description = this.photoForm?.get('description')?.value;
    const allowComments = this.photoForm?.get('allowComments')?.value;
    this.photoService
    .upload(description, allowComments, this.file)
    .subscribe(() => this.router.navigate(['']));
  }

}
