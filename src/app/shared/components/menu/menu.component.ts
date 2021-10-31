import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isShown: boolean = false;

  toggle() {
    this.isShown = !this.isShown;
  }

  constructor() {}

  ngOnInit(): void {}
}
