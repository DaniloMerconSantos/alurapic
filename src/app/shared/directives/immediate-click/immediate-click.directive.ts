import { PlatformDetectorService } from './../../../core/plataform-detector/plataform-detector.service';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit{

  constructor( 
      private element : ElementRef<any>,
      private platformDetector : PlatformDetectorService
    ) { }
  
  ngOnInit(): void {
    this.platformDetector.isPlatFormBrowser() &&
      this.element.nativeElement.click();
  }

}
