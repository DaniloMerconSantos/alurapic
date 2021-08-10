import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() description = '';
  @Input() url = '';

}