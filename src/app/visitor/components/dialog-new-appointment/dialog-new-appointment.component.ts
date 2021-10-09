import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Place } from 'src/app/models/place';
import { DatePipe } from '@angular/common';
import { PlaceService } from 'src/app/providers/services/place.service';
import { AppointmentItem, NewAppointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/providers/services/appointment.service';

@Component({
  selector: 'app-dialog-new-appointment',
  templateUrl: './dialog-new-appointment.component.html',
  styleUrls: ['./dialog-new-appointment.component.css']
})
export class DialogNewAppointmentComponent implements OnInit {

  formAppointment: FormGroup;
  spaces: Place[];
  minDate = new Date();

  constructor(public dialogRef: MatDialogRef<DialogNewAppointmentComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private placeService: PlaceService,
              private appointmentService: AppointmentService) { 
                this.placeService.getPlaces().subscribe(({places}) => {
                  this.spaces = places;
                });
                this.createForms();

              }

  ngOnInit(): void {
  }

  createForms(): void {
    this.formAppointment = this.fb.group({
      placeId: [
        null
      ],
      appointmentDate: [null]
    });
  }

  get appointmentDate(): AbstractControl {
    return this.formAppointment.get('appointmentDate');
  }

  save(){
    if (this.appointmentDate.value){
      const appointmet: NewAppointment = this.formAppointment.value;
      appointmet.appointmentDate = new DatePipe('en-US').
      transform((this.formAppointment.get('appointmentDate').value), 'yyyy-MM-dd');
      this.appointmentService.newAppointment(appointmet).subscribe(() => {
        this.dialogRef.close();
      });
    }else {
      
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
