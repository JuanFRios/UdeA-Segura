import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewAppointmentComponent } from './dialog-new-appointment.component';

describe('DialogNewAppointmentComponent', () => {
  let component: DialogNewAppointmentComponent;
  let fixture: ComponentFixture<DialogNewAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
