import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[autoHide]'
})
export class AutoHideDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
      this.el.nativeElement.style.backgroundColor = 'red';
  }
}
