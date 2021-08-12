import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable({ providedIn: 'root'})
export class PlatformDetectorService {

  constructor(@Inject(PLATFORM_ID) private platformid: string) {}

  isPlatFormBrowser() {
    return isPlatformBrowser(this.platformid);
  }
}