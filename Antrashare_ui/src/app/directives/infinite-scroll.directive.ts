import { AfterViewInit, ContentChild, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[infiniteScroll]'
})
export class InfiniteScrollDirective implements OnInit, AfterViewInit, OnDestroy {

  @Input() options = {};
  @Output() scrolled = new EventEmitter();

  @ContentChild('scrollFooter', { static: false }) scrollFooter!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    if (!this.scrollFooter) {
      const footer = this.renderer.createElement('div');
      this.renderer.setStyle(footer, "height", "1px");
      this.renderer.appendChild(this.elementRef.nativeElement, footer);
      this.observer.observe(footer);
    } else {
      this.observer.observe(this.scrollFooter.nativeElement);
    }
  }

  ngOnInit(): void {
    const options = {
      root: this.isHostScrollable() ? this.elementRef.nativeElement : null,
      threshold: 0,
      ...this.options
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  get hostElement() {
    return this.elementRef.nativeElement;
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.hostElement);

    return style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll';
  }

}
