import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardComponent } from './components/guard/guard.component';
import { GuardRoutingModule} from './guard-routing.module';



@NgModule({
  declarations: [GuardComponent],
  imports: [
    CommonModule,
    GuardRoutingModule
  ]
})
export class GuardModule { }
