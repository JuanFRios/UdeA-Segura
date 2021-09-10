import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModule } from './../sidenav/sidenav.module'
import { VisitorComponent } from './components/visitor/visitor.component';
import { VisitorRoutingModule } from './visitor-routing.module';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [VisitorComponent, SearchComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SidenavModule
  ]
})
export class VisitorModule { }
