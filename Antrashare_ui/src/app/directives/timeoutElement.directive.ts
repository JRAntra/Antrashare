import {Directive, ElementRef, OnInit, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[timeoutElement]'
})
export class TimeoutElementDirective implements OnInit {
    constructor(private item: ElementRef) {     
    }
    
    ngOnInit() {
        setTimeout(() => {
            this.item.nativeElement.style['display'] = 'none';
        }, 5000)
    }
}