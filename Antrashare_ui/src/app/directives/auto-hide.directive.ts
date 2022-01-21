import { Directive, TemplateRef, Input, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[autoHide]'
})
export class AutoHideDirective implements OnInit {
  time: number = DEFAULT_TIME;

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

  ngOnInit(): void {
    // display the template
    this.viewRef.createEmbeddedView(this.templateRef);
    // set a time to hide the view
    setTimeout(() => {
      this.viewRef.clear();
    }, this.time);
  }
}

export const DEFAULT_TIME: number = 5000;
