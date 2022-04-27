import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTestimonialesComponent } from './index-testimoniales.component';

describe('IndexTestimonialesComponent', () => {
  let component: IndexTestimonialesComponent;
  let fixture: ComponentFixture<IndexTestimonialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTestimonialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTestimonialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
