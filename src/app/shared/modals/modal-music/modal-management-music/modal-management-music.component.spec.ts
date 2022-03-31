import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManagementMusicComponent } from './modal-management-music.component';

describe('ModalManagementMusicComponent', () => {
  let component: ModalManagementMusicComponent;
  let fixture: ComponentFixture<ModalManagementMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalManagementMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalManagementMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
