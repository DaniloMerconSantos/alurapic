import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoComment } from './../photo/photo-comment';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})

export class PhotoDetailsComponent implements OnInit {

  photo$!: Observable<Photo>;
  photoId!: number;
  constructor( 
      private route: ActivatedRoute,
      private photoService: PhotoService,
    ) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

}
