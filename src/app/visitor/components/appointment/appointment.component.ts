import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentItem } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/providers/services/appointment.service';
import Swal from 'sweetalert2';
import { DialogNewAppointmentComponent } from '../dialog-new-appointment/dialog-new-appointment.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  displayedColumns: string[] = ['place', 'date', 'status', 'delete'];
  dataSource = new MatTableDataSource<AppointmentItem>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private appointmentService: AppointmentService,  private dialog: MatDialog) {
    this.appointmentService.getAppointmentsByUser().subscribe(({appointments}) => {
      this.dataSource = new MatTableDataSource<AppointmentItem>(appointments);
    });
   }
  
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  throughGate() {
    const dialogRef = this.dialog.open(DialogNewAppointmentComponent, {
      
    });

    dialogRef.afterClosed().subscribe(() => {
      this.appointmentService.getAppointmentsByUser().subscribe(({appointments}) => {
        this.dataSource = new MatTableDataSource<AppointmentItem>(appointments);
      })
    })
  }

  deleteAppointment(appointmentId: string){
    Swal.fire({
      title: '¿Está seguro que quiere eliminar la visita?',
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
       if (result.isDenied) {
        this.appointmentService.removeAppointment(appointmentId).subscribe(() => {
          this.appointmentService.getAppointmentsByUser().subscribe(({appointments}) => {
            this.dataSource = new MatTableDataSource<AppointmentItem>(appointments);
          });
        });
      }
    });
  }

}
