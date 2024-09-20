import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css',
})
export class PortafolioComponent {
  // Atributos
  nombre!: string;
  edad!: number;
  activo!: boolean;
  calificaciones!: Array<number>;
  alumno = {
    matricula: '',
    nombre: '',
    grado: 0,
    grupo: 'F',
    activo: false,
  };
  estatus!: any;

  texto!: string;

  nombres!: string;
  apellidos!: string;
  nombrecompleto!: string;

  numero1!: number;
  numero2!: number;
  resultado!: number;

  n1!: number;
  n2!: number;
  n3!: number;
  promedio!: number;

  ngOnInit() {
    this.texto = 'Hola mundo!!';

    this.nombres = 'Carlos Rodriguez';
    this.apellidos = 'Rodriguez Macias';
    this.nombrecompleto = this.nombres + " " +this.apellidos;

    this.numero1 = 5;
    this.numero2 = 2;
    this.resultado = this.numero1 + this.numero2;

    console.log(this.texto);

    // alert(this.texto);
  }

  calcular() {
    this.promedio = (this.n1 + this.n2 + this.n3) / 3;
  }
}
