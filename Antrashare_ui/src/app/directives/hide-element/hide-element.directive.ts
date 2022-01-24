import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideElement]'
})
export class HideElementDirective implements OnInit {

  //by YuxuanWu
  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    let that = this
    setTimeout(function(){
      that.el.nativeElement.style['display'] = 'none'
    }, 5000)
  }

}
