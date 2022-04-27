import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAnuncioComponent } from './index-anuncio.component';

describe('IndexAnuncioComponent', () => {
  let component: IndexAnuncioComponent;
  let fixture: ComponentFixture<IndexAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
