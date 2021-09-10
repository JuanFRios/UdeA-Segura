import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERRORES_FORMULARIOS, MENSAJES_VALIDACION } from './validation';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css', './../../auth.css']
})
export class NewUserComponent implements OnInit {
  formIncioSesion: FormGroup;
  erroresFormulario = ERRORES_FORMULARIOS;
  mensajesValidacion = MENSAJES_VALIDACION;
  errMess: string;
  cargando = false;
  lista_roles = [];

  constructor(
    private fb: FormBuilder,
  ) {
    this.crearFormulario();
  }

  ngOnInit() {}

  crearFormulario(): void {
    this.formIncioSesion = this.fb.group({
      nombreUsuario: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      clave: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      rol: ['', [Validators.required]],
    });

    this.formIncioSesion.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  /**
   * Método encargado de validar si el valor ingresado a un input
   * contiene errores.
   * El ? indica que el parámetro es opcional
   * @param data : opcional
   */
  onValueChanged(data?: any) {
    // Si el formulario no ha sido creado retorna nada
    if (!this.formIncioSesion) {
      return;
    }
    const form = this.formIncioSesion;

    // tslint:disable-next-line:forin
    for (const campo in this.erroresFormulario) {
      // Nos encargamos de resetear el error para volver a identificar si hay
      this.erroresFormulario[campo] = '';
      // Obtenemos el input del formulario por el nombre
      const control = form.get(campo);
      // Si control no es null, hubo cambios y no es valido
      if (control && control.dirty && !control.valid) {
        // Buscamos los mensajes de error para el input
        const messages = this.mensajesValidacion[campo];
        // recorremos el arreglo de errores del input
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          // Se concatenan los mensajes de errores
          this.erroresFormulario[campo] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    // this.cargando = true;
    // let usuario: Usuario;
    // usuario = this.formIncioSesion.value;
    // const clave = this.formIncioSesion.get('clave').value;
    // let mensajeError: MensajeError;

    // const claveCifrada = this.cifradoService.cifrar(clave);
    // this.loginService
    //   .autenticar(
    //     usuario.nombreUsuario,
    //     claveCifrada,
    //     +this.formIncioSesion.get('rol').value
    //   )
    //   .subscribe(
    //     (data) => {
    //       if (!data.jwt) {
    //         this.errMess = 'Usted no posee una cuenta en CURFI.';
    //         this.formIncioSesion.reset();
    //         this.cargando = false;
    //         return;
    //       }
    //       this.loginService.guardarDatosUsuario(data.jwt, claveCifrada);
    //       this.loginService.guadarRoles(data.roles);
    //       let redirect = '/inicio';
    //       const navigationExtrasProf: NavigationExtras = {
    //         queryParamsHandling: 'preserve',
    //         preserveFragment: true,
    //       };
    //       // Según el rol se hace una redirección
    //       switch (this.formIncioSesion.get('rol').value) {
    //         case 1:
    //           redirect = this.loginService.redirectUrl
    //             ? this.loginService.redirectUrl
    //             : '/administrador/materias';
    //           break;
    //         case 2:
    //           break;
    //         case 3:
    //           redirect = this.loginService.redirectUrl
    //             ? this.loginService.redirectUrl
    //             : '/coordinador/materias';
    //           break;
    //         case 4:
    //           redirect = this.loginService.redirectUrl
    //             ? this.loginService.redirectUrl
    //             : '/profesor/grupos';
    //           break;
    //         case 5:
    //           redirect = this.loginService.redirectUrl
    //             ? this.loginService.redirectUrl
    //             : '/vicedecano/materias';
    //           break;
    //         case 6:
    //           redirect = '/jefeDepartamento/materias';
    //           break;
    //       }
    //       // Se realiza la redirección de acuerdo al rol
    //       this.router.navigate([redirect], navigationExtrasProf);
    //     },
    //     (error) => {
    //       mensajeError = error;

    //       switch (error.status) {
    //         case 404:
    //           this.errMess = 'Usuario o contraseña inválidos.';
    //           break;
    //         case 400:
    //           this.errMess = 'Usted no cuenta con el rol seleccionado.';
    //           break;
    //       }

    //       // Volvemos el formulario a su estado original
    //       this.formIncioSesion.reset();
    //       this.cargando = false;
    //     }
    //   );
  }
}
