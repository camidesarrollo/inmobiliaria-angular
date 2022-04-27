import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInternaComponent } from './header-interna.component';

describe('HeaderInternaComponent', () => {
  let component: HeaderInternaComponent;
  let fixture: ComponentFixture<HeaderInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
