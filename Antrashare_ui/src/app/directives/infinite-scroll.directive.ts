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

  get hostElement() {
    return this.elementRef.nativeElement;
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.hostElement);

    return style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll';
  }

  ngOnInit(): void {
    // initial options
    const options = {
      root: this.isHostScrollable() ? this.hostElement : null,
      threshold: 0,
      ...this.options
    };

    // create event for the observer
    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);
  }

  ngAfterViewInit(): void {
    if (!this.scrollFooter) {
      // create comment
      this.renderer.appendChild(
        this.hostElement,
        this.renderer.createComment("This is the scrollFooter element!")
      );

      // create footer
      const footer = this.renderer.createElement('div');
      this.renderer.setStyle(footer, "height", "1px");
      this.renderer.appendChild(this.hostElement, footer);

      // listen event
      this.observer.observe(footer);
    } else {
      // listen event
      this.observer.observe(this.scrollFooter.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

}
