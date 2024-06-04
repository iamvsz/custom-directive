import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';

@Component({
  template: `<div [appHighlight]="color"></div>`
})
class TestComponent {
  color = 'yellow';
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should set the background color to yellow by default', () => {
    const element = fixture.nativeElement.querySelector('div');
    expect(element.style.backgroundColor).toBe('yellow');
  });

  it('should set the background color to a custom color', () => {
    fixture.componentInstance.color = 'red';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('div');
    expect(element.style.backgroundColor).toBe('red');
  });
});
