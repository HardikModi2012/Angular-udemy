import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubprofilecomponentComponent } from './githubprofilecomponent.component';

describe('GithubprofilecomponentComponent', () => {
  let component: GithubprofilecomponentComponent;
  let fixture: ComponentFixture<GithubprofilecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubprofilecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubprofilecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
