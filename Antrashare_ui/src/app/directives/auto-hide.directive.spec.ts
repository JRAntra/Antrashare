import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AutoHideDirective } from './auto-hide.directive';

@Component({
  template: `
  <h2 autoHide>This is for testing AutoHideDirective by default 5 seconds.</h2>
  <h2 autoHide [timings]="20000">This is for testing AutoHideDirective by setting 20 seconds.</h2>
  <h2>This is No AutoHideDirective.</h2>
  `
})
class AutoHideDirectiveTestComponent { }

fdescribe('AutoHideDirective', () => {
  let fixture: ComponentFixture<AutoHideDirectiveTestComponent>;
  let des: DebugElement[];  // the two elements w/ the directive
  let bareH2: DebugElement; // the <h2> w/o the directive

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
      ],
      declarations: [AutoHideDirective, AutoHideDirectiveTestComponent],
      providers: [NoopAnimationsModule]
    })
      .createComponent(AutoHideDirectiveTestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached AutoHideDirective
    des = fixture.debugElement.queryAll(By.directive(AutoHideDirective));

    // the h2 without the AutoHideDirective
    bareH2 = fixture.debugElement.query(By.css('h2:not([autoHide])'));
  });

  // auto-hide tests
  it('should have two autoHide elements', () => {
    expect(des.length).toBe(2);
  });

  it('should timing in 2nd <h2> is greater than default value', () => {
    const dir = des[1].injector.get(AutoHideDirective) as AutoHideDirective;
    const timings = dir.timings;
    expect(timings).toBeGreaterThan(5000);
  });

  it('bare <h2> should not have an autoHide attribute', () => {
    expect(bareH2.attributes['autoHide']).toBeUndefined();
  });

  // injected directive
  // attached AutoHideDirective can be injected
  it('can inject `AutoHideDirective` in 1st <h2>', () => {
    const dir = des[0].injector.get(AutoHideDirective);
    expect(dir).toBeTruthy();
  });

  it('cannot inject `AutoHideDirective` in 3rd <h2>', () => {
    const dir = bareH2.injector.get(AutoHideDirective, null);
    expect(dir).toBe(null);
  });
});
