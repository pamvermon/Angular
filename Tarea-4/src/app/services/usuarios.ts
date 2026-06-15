import { Injectable } from '@angular/core';


/* 
Los componentes deben ser delgados y solo ocuparse de la representacion. No gestionar datos
El servicio si queremos que gestione datos

Compartir informacion: al ser singletons pueden compartir informacion entre componentes y solo ellos comparten esta informacion.

*/

/* 
Como mi servicio maneja usuarios, me interesa definir que es un usuario en la aplicacion
Para eso usamos una interface
*/
export interface Usuario {
  id: number;
  nombre: string;
  fechaNacimiento: Date;
  dinero: number;
  descuento: number;
}


@Injectable({
  providedIn: 'root',
})
export class Usuarios {

  //Este dato debemos tratar de que fuera del servicio sea inmutable
  private listaUsuarios: Usuario[] = [
    {
      id: 1,
      nombre: "pepe Suarez",
      fechaNacimiento: new Date(1998, 4, 15),
      dinero: 100, 
      descuento: 15
    },
    {
      id: 2,
      nombre: "Julieta Suarez",
      fechaNacimiento: new Date(1998, 4, 15),
      dinero: 100, 
      descuento: 15
    }
  ]

  //Metodo para obtener la lista de usuarios
  getUsers(){
    //Creo un nuevo array con los valores de mi lista de usuarios para romper la referencia
    return [...this.listaUsuarios]
  }

  //Crea un id para el usuario recibido y lo suma a la lista
  //El omit sirve para definir que usuario sea de tipo usuario pero no necesariamente debe tener la propiedad id, debido a que esta se generara en el metodo
  addUser(user_raw: Omit<Usuario, 'id'>): Usuario{

    //Si hay usuarios cargados, vamos a buscar el id de maximo valor entre la lista de usuarios, sino agregamos un 1
    const new_user_id = this.listaUsuarios.length > 0
    ? Math.max(...this.listaUsuarios.map(user => user.id)) + 1
    : 1
    const new_user : Usuario = {
      id: new_user_id,
      ...user_raw
    }
    this.listaUsuarios.push(new_user)
    return new_user
  }


  /* Elimina un usuario de lista por id y con un boolean nos indica si la operacion se hizo o no */
  deleteUserById(id: number): boolean {
    const original_length = this.listaUsuarios.length
    //Dejo estar a todos los usuarios que NO tengan el id que quiero eliminar
    this.listaUsuarios = this.listaUsuarios.filter((usuario) => {
      return usuario.id !== id
    })
    return this.listaUsuarios.length < original_length
  }
}
