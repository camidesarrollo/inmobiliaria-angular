import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionBlogComponent } from './administracion-blog.component';

describe('AdministracionBlogComponent', () => {
  let component: AdministracionBlogComponent;
  let fixture: ComponentFixture<AdministracionBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
