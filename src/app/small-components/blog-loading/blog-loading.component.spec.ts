import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLoadingComponent } from './blog-loading.component';

describe('BlogLoadingComponent', () => {
  let component: BlogLoadingComponent;
  let fixture: ComponentFixture<BlogLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogLoadingComponent]
    });
    fixture = TestBed.createComponent(BlogLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
