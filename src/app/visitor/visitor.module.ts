import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModule } from './../sidenav/sidenav.module'
import { VisitorComponent } from './components/visitor/visitor.component';
import { VisitorRoutingModule } from './visitor-routing.module';
import { SearchComponent } from './components/search/search.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogNewAppointmentComponent } from './components/dialog-new-appointment/dialog-new-appointment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [VisitorComponent, SearchComponent, AppointmentComponent, DialogNewAppointmentComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    NgCircleProgressModule.forRoot({
      radius: 45
    })
  ]
})
export class VisitorModule { }
