<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
=======
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5

import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsComponent ]
    })
    .compileComponents();
  });
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ]
    })
    .compileComponents();
  }));
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
