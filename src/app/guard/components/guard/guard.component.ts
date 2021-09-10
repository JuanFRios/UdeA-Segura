import { Component, OnInit } from '@angular/core';
import { MENU_GUARD } from 'src/app/commun/listas';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements OnInit {
  lista_menu = MENU_GUARD;
  constructor() { }

  ngOnInit(): void {
  }

}
