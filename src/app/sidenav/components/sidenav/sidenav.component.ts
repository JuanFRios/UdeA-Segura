import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Menu } from './../../../models/menu';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  nombre_usuario: string;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  menuActivo: Menu;
  @Input() listaMenu: Menu[];
  rolAutenticado: string;
  _content: any;
  @Input() set content(value: TemplateRef<any>) {
    this._content = value;
  }
  roles: { IdRol: number, desc: string }[];
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this.rolAutenticado = this.loginService.obtenerRolDecifrado();
  }
  ngOnInit() {
    // Se autoselecciona el primer item de la lista de menú
    this.menuActivo = this.listaMenu[0];
    // this.roles = this.loginService.obtenerRoles();
  }

  ngAfterViewInit() {
    // Si la resolución es menos de 600px entonces cierra el sidenav
    if (this.mobileQuery.matches) {
      this.sidenav.opened = false;
    } else {
      this.sidenav.opened = true;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  cambiarMenu(menuId: number) {
    this.menuActivo = this.listaMenu[menuId - 1];

    // Si la resolución es de dispositivo móvil cuando da clic en el menú, este se cierra
    if (this.mobileQuery.matches) {
      this.sidenav.opened = false;
    }
  }

  cambiarRol(rol: number) {
    
  }

  esRolAutenticado(idRol: number){
    // const rol = +this.loginService.obtenerIdRolAutenticado();
    // return rol === idRol;
  }
}
