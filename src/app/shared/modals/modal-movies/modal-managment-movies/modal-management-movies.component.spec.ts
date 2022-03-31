import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManagementMoviesComponent } from './modal-management-movies.component';

describe('ModalManagementMoviesComponent', () => {
  let component: ModalManagementMoviesComponent;
  let fixture: ComponentFixture<ModalManagementMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalManagementMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalManagementMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
