import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaUsuarios } from './components/lista-usuarios/lista-usuarios';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ReactiveFormsModule, 
    CommonModule,
    ListaUsuarios
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //Declaramos que tenemos la propiedad register form
  register_form: FormGroup

  //Este constructor se invocara al instanciar el componente
  //Recien ahi angular nos pasara la el objeto formBuilder
  constructor(private formBuilder: FormBuilder){
    this.register_form = this.formBuilder.group({
      nombre: [
        '', //Inicialmente es ''
        [
          Validators.required, //que tenga un valor
          Validators.minLength(3)
        ], //array de validaciones
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      edad: [null]
    });
  }


  submitRegisterForm(){
    console.log(
      "Se envio el formulario de registro", 
      this.register_form.value
    )
  }

  //Metodo para obtener facilmente el error de x campo de nuestro formulario
  getRegisterFormError(field_name: string) : string{
    const register_form_control = this.register_form.get(field_name)

    console.log(register_form_control?.errors)

    //Si el usuario no toco el campo no mostrar error
    if(!register_form_control?.touched){
      return ''
    }

    //Si no tiene errores no muestro nada
    if(!register_form_control.errors){
      return ''
    }

    //En caso de que tu campo no este correctamente controlado, devolver ''
    if(!register_form_control) {
      return ''
    }

    if(register_form_control.hasError(ERRORS.REQUIRED.NAME)){
      //Si el error es required

      return 'Este campo es obligatorio'
    }
    if(register_form_control.hasError(ERRORS.MIN_LENGTH.NAME)){
      //Cuanto la longitud requerida
      const requiredLength = register_form_control.errors?.[ERRORS.MIN_LENGTH.NAME].requiredLength
      return 'Debe tener al menos ' + requiredLength + ' caracteres'
    }

    return ''
    
  }
}

const ERRORS = {
  MIN_LENGTH: {
    NAME: 'minlength',
  },
  REQUIRED: {
    NAME: 'required'
  }
}