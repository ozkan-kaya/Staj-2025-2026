import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class First {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  }

  @Input() set backgroundColor(color:string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
