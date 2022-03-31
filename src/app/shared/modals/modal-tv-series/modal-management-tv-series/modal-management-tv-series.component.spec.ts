import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManagementTvSeriesComponent } from './modal-management-tv-series.component';

describe('ModalManagementTvSeriesComponent', () => {
  let component: ModalManagementTvSeriesComponent;
  let fixture: ComponentFixture<ModalManagementTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalManagementTvSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalManagementTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
