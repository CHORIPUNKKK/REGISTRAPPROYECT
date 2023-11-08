import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfesorPage } from './user-profesor.page';

describe('UserProfesorPage', () => {
  let component: UserProfesorPage;
  let fixture: ComponentFixture<UserProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
