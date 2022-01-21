import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[TmpElement]'
})
export class TmpElementDirective {

  constructor(readonly element: ElementRef<HTMLElement>) { }
  @Input() TmpElement?: number;

  ngOnInit() {
    setTimeout(() => {
      this.element.nativeElement.remove();
    }, this.TmpElement);
  }
}
