import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherdetailsComponent } from './teacherdetails.component';

describe('TeacherdetailsComponent', () => {
  let component: TeacherdetailsComponent;
  let fixture: ComponentFixture<TeacherdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherdetailsComponent]
    });
    fixture = TestBed.createComponent(TeacherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
