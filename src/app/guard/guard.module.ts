import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModule } from './../sidenav/sidenav.module'
import { GuardComponent } from './components/guard/guard.component';
import { GuardRoutingModule} from './guard-routing.module';
import { SpacesControlComponent } from './components/spaces-control/spaces-control.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [GuardComponent, SpacesControlComponent],
  imports: [
    CommonModule,
    GuardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot({
      radius: 45
    })
  ]
})
export class GuardModule { }
