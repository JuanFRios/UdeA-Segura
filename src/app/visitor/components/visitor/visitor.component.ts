import { Component, OnInit } from '@angular/core';
import { MENU_VISITOR } from 'src/app/commun/listas';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  lista_menu = MENU_VISITOR;
  constructor() { }

  ngOnInit(): void {
  }

}
