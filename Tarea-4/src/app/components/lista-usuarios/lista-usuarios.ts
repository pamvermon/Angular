import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DescuentoPipe } from '../../pipes/descuento-pipe';
import { Usuario, Usuarios } from '../../services/usuarios';

@Component({
  selector: 'app-lista-usuarios',
  imports: [
    CurrencyPipe,
    DatePipe,
    DescuentoPipe
  ],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios implements OnInit {

  usuariosList: Usuario[] = [];

  //Forma de instanciar mi servicio EN ESTE COMPONENTE
  //inject a partir de angular +17
  private usuariosService = inject(Usuarios)

  //Se activa cuando el componente se inicializo
  ngOnInit(): void{
    this.cargarUsuarios()
  }

  //Como cargar usuarios del servicio al componente
  cargarUsuarios (): void {
    this.usuariosList = this.usuariosService.getUsers()
  }

  agregarUsuarioSimulado (): void {
    const nombres_ejemplo = [
      'Sofia Perez',
      'Pepe Suarez',
      'Julieta Aguirre'
    ]

    //Genero datos randoms para el usuario
    const nombre_aleatorio = nombres_ejemplo[Math.floor(Math.random() * nombres_ejemplo.length)]

    const anio_aleatorio = Math.floor(Math.random() * (2023 - 2000) + 2000 )
    const mes_aleatorio = Math.floor(Math.random() * (12 - 1) + 1 )
    const dia_aleatorio = Math.floor(Math.random() * (31 - 1) + 1 )

    const dinero_aleatorio = Math.floor(Math.random() * (1000 - 1) + 1 )
    const descuento_aleatorio = Math.floor(Math.random() * (100 - 1) + 1 )


    const usuario_simulado: Omit<Usuario, 'id'> = {
      nombre: nombre_aleatorio,
      fechaNacimiento: new Date(anio_aleatorio, mes_aleatorio, dia_aleatorio),
      dinero: dinero_aleatorio,
      descuento: descuento_aleatorio
    }

    this.usuariosService.addUser(usuario_simulado)
    
    //recargamos el estado del componente
    this.cargarUsuarios()
  }

  eliminarUsuario (id: number):void {
    const seElimino = this.usuariosService.deleteUserById(id)

    //Si efectivamente se elimino cargamos la lista
    if(seElimino){
      this.cargarUsuarios()
    }
  }

}
