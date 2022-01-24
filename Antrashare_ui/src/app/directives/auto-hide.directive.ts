import { animate, AnimationBuilder, AnimationMetadata, style } from '@angular/animations';
import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[autoHide]'
})
export class AutoHideDirective implements OnInit {
  private time: number = DEFAULT_TIME;

  constructor(private el: ElementRef, private builder: AnimationBuilder) { }

  ngOnInit(): void {
    // based on a time to hide the element
    const factory = this.builder.build(this.fadeOut());
    const player = factory.create(this.el.nativeElement);
    player.onDone(() => {
      // after the animation is done, the element is removed
      this.el.nativeElement.remove();
    });
    player.play();
  }

  /**
  * This is the fadeOut function that set the fade out effect for the AnimationBuilder
  * @returns returns an AnimationMetadata array 
  */
  private fadeOut(): AnimationMetadata[] {
    return [
      style({ opacity: '*' }),
      animate(this.time + 'ms ease-in', style({ opacity: 0 })),
    ];
  }
}

export const DEFAULT_TIME: number = 5000;
