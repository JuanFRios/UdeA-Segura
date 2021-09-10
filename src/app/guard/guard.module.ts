import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModule } from './../sidenav/sidenav.module'
import { GuardComponent } from './components/guard/guard.component';
import { GuardRoutingModule} from './guard-routing.module';
import { SpacesControlComponent } from './components/spaces-control/spaces-control.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [GuardComponent, SpacesControlComponent],
  imports: [
    CommonModule,
    GuardRoutingModule,
    SidenavModule,
    MatCardModule
  ]
})
export class GuardModule { }
