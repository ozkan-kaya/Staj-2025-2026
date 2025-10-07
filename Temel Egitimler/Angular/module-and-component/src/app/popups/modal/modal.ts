import {Component, ElementRef, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  @Output() close = new EventEmitter();

  constructor(private element: ElementRef) {

  }

  ngOnInit():void {
    document.body.appendChild(this.element.nativeElement);
  }

  ngOnDestroy():void {
    this.element.nativeElement.remove();
  }

  onCloseClick():void {
    this.close.emit();
  }
}
