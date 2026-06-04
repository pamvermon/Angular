import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { minLength, required } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  register_form: FormGroup;
  constructor(private formBuilder: FormBuilder){
  this.register_form = this.formBuilder.group({
    nombre: ['',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    email: ['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [''],
    edad: [''],
     })
  }
 submitRegisterForm(){
  console.log("Se envio el formulario de registro",
    this,this.register_form.value
  )
 }

getRegisterFormError(field_name: string) :string {
   const register_form_control = this.register_form.get(field_name);

   // 1. Si no existe, cortamos acá devolviendo vacío
   if (!register_form_control){
      return '';
   } // <-- Acá cerramos tu primer IF de forma segura

   // 2. Evaluamos los errores (Acá TS ya sabe 100% que NO es null)
   if (register_form_control.hasError('required')) {
      return 'Este campo es obligatorio';
   }

   if (register_form_control.hasError('email')) {
      return 'El formato de email no es válido';
   }

   // Ojo acá: el error de Angular va con 'minlength' en minúscula
   if (register_form_control.hasError('minlength')){
      const requiredLength = register_form_control.errors?.['minlength'].requiredLength;
      return 'Debe tener al menos ' + requiredLength + ' caracteres';
   }   

   // 3. El return por defecto que te pide TypeScript para cerrar la función
   return ''; 
}
}



