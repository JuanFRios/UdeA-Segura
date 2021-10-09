import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThrouhgGate } from 'src/app/models/appointment';
import { Place } from 'src/app/models/place';
import { AppointmentService } from 'src/app/providers/services/appointment.service';
import { PlaceService } from 'src/app/providers/services/place.service';


@Component({
  selector: 'app-spaces-control',
  templateUrl: './spaces-control.component.html',
  styleUrls: ['./spaces-control.component.css']
})
export class SpacesControlComponent implements OnInit {

  formPlace: FormGroup;
  formDocument: FormGroup;
  placeSelected: Place;
  spaces: Place[];
  percentOccupation: number;
  @ViewChild('documentInput') myInputField: ElementRef;

  constructor(private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private placeService: PlaceService,
    private appointmetService: AppointmentService,
    private fb: FormBuilder) {
    this.placeService.getPlaces().subscribe(({ places }) => {
      this.spaces = places;
    })
    this.createForms();
  }

  ngOnInit(): void {
  }



  get place(): AbstractControl {
    return this.formPlace.get('place');
  }

  get document(): AbstractControl {
    return this.formDocument.get('document');
  }

  createForms(): void {
    this.formPlace = this.fb.group({
      place: [
        null
      ]
    });
    this.formDocument = this.fb.group({
      document: [
        null
      ]
    });
  }

  onSelect() {
    this.placeService.getPlaceById(this.place.value).subscribe(({ place }) => {
      this.placeSelected = place;
      this.percentOccupation = Math.round((place.currentCapacity * 100) / place.maxCapacity)
      this.myInputField.nativeElement.focus();
    })
  }

  onCheckin() {
    if (this.document.value) {
      const checkin: ThrouhgGate = new ThrouhgGate(this.document.value, this.place.value);
      this.appointmetService.checkIn(checkin).subscribe((data) => {
        this.showSnackBar('Registro exitoso', 'Cerrar')
        this.onSelect();
        this.document.setValue('');
      }, (error) => {
        this.showSnackBarError(error.error.msg, 'Cerrar');
        this.document.setValue('');
        this.myInputField.nativeElement.focus();

      });
    }

  }

  onCheckout() {
    const checkout: ThrouhgGate = new ThrouhgGate(this.document.value, this.place.value);
    this.appointmetService.checkOut(checkout).subscribe((data) => {
      this.onSelect();
      this.document.setValue('');
    }, (error) => {
      this.showSnackBarError(error.error.msg, 'Cerrar');
      this.document.setValue('');
      this.myInputField.nativeElement.focus();
    });
  }

  showSnackBar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion, {
      duration: 4000,
      panelClass: 'snack-success'
    });
  }

  showSnackBarError(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion, {
      duration: 4000,
      panelClass: 'snack-error',
    });
  }


}
