import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CBDF_EGRH_9.1';
  nombre = "Evelyn Rocha";
  edad = 21;
  semestre = "Quinto semestre";
  calificaciones = [8,7,10,10,8,9,8];


  calcularPromedio(){
   let suma = 0;
   const longitudArreglo = this.calificaciones.length;
   for (let i = 0; i<this.calificaciones.length; i++)
   suma+=this.calificaciones[i];
  return suma/longitudArreglo; 
  }
  estadoAlumno(){
    if(this.calcularPromedio()>=6)
    return "Aprobado";
  else 
  return "No aprobado";
  }
}
