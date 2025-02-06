import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';
  //propiedades
  nombre ='RICARDO ARTURO RAMIREZ CRUZ';
  edad = 20;
  email ='arturorc.ti22@utsjr.edu.mx';
  activo =false;
  alumnos = [25,24,26];
  numero = 2;
  contador = 0;
  desactivarBoton = true;

  productos = [
    {
      id: 1,
      descripcion: 'sabritas',
      precio: 33.3
    },
    {
      id: 2,
      descripcion: 'juguito',
      precio: 28.8
    }, 
    {
      id: 3,
      descripcion: 'Huevos',
      precio: 45.6
    }
  ]

  //funcion que muestra si esta activo
  esActivo(){
    if(this.activo){
      return 'Alumno activo';
    }else{
      return 'Alumno inactivo';
    }
  }
  //FUNCION QEU SUME LOS ELEMTOS DE ARREGLO DE ALUMNOS
  sumarAlumnos(){
    let suma = 0;
    for(let i=0;i<this.alumnos.length;i++){
      suma += this.alumnos[i];
    }
    return suma;
  }

  //funcion que genere numeros aleatorios entre uno y tres
  generarNumero(){
    return Math.floor(Math.random() * 3) + 1;
  }

  //funcion que incrementa el contador
  incrementarContador(){
    this.contador++;
  }

  //funcion que decrementa el contador
  decrementarContador(){
    this.contador--;
  }

  //funcion que cambia el valor de desactivarBoton
  cambiarValor(){
    this.desactivarBoton = false;
  }

}