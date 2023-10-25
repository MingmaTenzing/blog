import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogPostsComponent } from './all-blog-posts.component';

describe('AllBlogPostsComponent', () => {
  let component: AllBlogPostsComponent;
  let fixture: ComponentFixture<AllBlogPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBlogPostsComponent]
    });
    fixture = TestBed.createComponent(AllBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
