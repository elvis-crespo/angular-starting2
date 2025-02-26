import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'gray';
  }
}
