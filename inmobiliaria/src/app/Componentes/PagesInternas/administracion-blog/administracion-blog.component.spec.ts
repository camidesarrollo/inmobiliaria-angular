import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { AdministracionBlogComponent } from './administracion-blog.component';

describe('AdministracionBlogComponent', () => {
  let component: AdministracionBlogComponent;
  let fixture: ComponentFixture<AdministracionBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionBlogComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
