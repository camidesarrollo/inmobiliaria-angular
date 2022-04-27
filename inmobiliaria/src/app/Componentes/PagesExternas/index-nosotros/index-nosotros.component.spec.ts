import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNosotrosComponent } from './index-nosotros.component';

describe('IndexNosotrosComponent', () => {
  let component: IndexNosotrosComponent;
  let fixture: ComponentFixture<IndexNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
