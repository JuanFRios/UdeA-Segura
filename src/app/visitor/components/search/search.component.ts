import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Place } from 'src/app/models/place';
import { AppointmentService } from 'src/app/providers/services/appointment.service';
import { PlaceService } from 'src/app/providers/services/place.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formPlace: FormGroup;
  placeSelected: Place;
  spaces: Place[];
  percentOccupation: number;

  constructor(private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private placeService: PlaceService,
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


  createForms(): void {
    this.formPlace = this.fb.group({
      place: [
        null
      ]
    });
  }

  onSelect() {
    this.placeService.getPlaceById(this.place.value).subscribe(({ place }) => {
      this.placeSelected = place;
      this.percentOccupation = Math.round((place.currentCapacity * 100) / place.maxCapacity)
    })
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
