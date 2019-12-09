import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeURL'
})
export class SafeURLPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ){}
  
  /**
   * Pipe To bypass security for urls in Iframes
   * 
   * @param value The url to sanitize
   * @param args Args of the pipe
   */
  transform(value: any, ...args: any[]): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
