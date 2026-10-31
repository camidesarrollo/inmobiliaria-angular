import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { IndexBlogComponent } from './index-blog.component';

describe('IndexBlogComponent', () => {
  let component: IndexBlogComponent;
  let fixture: ComponentFixture<IndexBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexBlogComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
