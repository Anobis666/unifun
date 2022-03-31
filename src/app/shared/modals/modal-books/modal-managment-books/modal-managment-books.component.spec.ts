import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManagmentBooksComponent } from './modal-managment-books.component';

describe('ModalManagmentBooksComponent', () => {
  let component: ModalManagmentBooksComponent;
  let fixture: ComponentFixture<ModalManagmentBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalManagmentBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalManagmentBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
