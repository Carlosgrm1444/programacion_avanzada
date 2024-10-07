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

  genero!: string;

  valorAleatorio!: number;
  buttonsState: string[] = Array(10).fill('btn-secondary');

  ngOnInit() {
    this.texto = 'Hola mundo!!';

    this.nombres = 'Carlos Rodriguez';
    this.apellidos = 'Rodriguez Macias';
    this.nombrecompleto = this.nombres + ' ' + this.apellidos;

    this.numero1 = 5;
    this.numero2 = 2;
    this.resultado = this.numero1 + this.numero2;

    console.log(this.texto);

    this.generarNuevoValorAleatorio();

    // alert(this.texto);

    this.frutas = [];
  }

  calcular() {
    this.promedio = (this.n1 + this.n2 + this.n3) / 3;
  }

  enviar() {
    if (this.genero == 'Hombre') {
      alert('Bienvenido al curso!');
    }
    if (this.genero == 'Mujer') {
      alert('Bienvenida al curso!');
    }
  }

  precio!: number;
  precioFinal!: number;
  descuento!: number;
  textoResultado!: string;

  calcularPrecio() {
    if (this.precio <= 99) {
      this.descuento = 0;
    } else if (this.precio <= 199) {
      this.descuento = 10;
    } else if (this.precio <= 299) {
      this.descuento = 20;
    } else {
      this.descuento = 30;
    }

    this.precioFinal = this.precio - (this.precio * this.descuento) / 100;

    this.textoResultado = `El descuento es del ${this.descuento}%, y el costo total del producto es ${this.precioFinal}`;
  }

  generarNuevoValorAleatorio() {
    this.valorAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(`El valor secreto es ${this.valorAleatorio}`);
  }

  pushSecretNumber(index: number) {
    if (index + 1 === this.valorAleatorio) {
      alert('¡El valor es correcto!');
      this.buttonsState[index] = 'btn-success';

      this.generarNuevoValorAleatorio();

      this.resetearBotones();
    } else if (index + 1 > this.valorAleatorio) {
      alert('¡Estás arriba!');
      this.buttonsState[index] = 'btn-danger';
    } else if (index + 1 < this.valorAleatorio) {
      alert('¡Estás abajo!');
      this.buttonsState[index] = 'btn-danger';
    }
  }

  resetearBotones() {
    this.buttonsState = Array(10).fill('btn-secondary');
  }

  fruta!: string;
  frutas!: Array<string>;

  agregar() {
    if (this.frutas.length < 5) {
      this.frutas.push(this.fruta);
      console.log(this.frutas);
      this.frutas.sort();
    } else {
      alert('No puedes agregar más de 5 frutas');
    }
  }

  ingresaNumeros: String = 'Ingresa el numero 1';
  numeros: Array<number> = [];
  numeroMayor!: number;
  textNumeroMayor: String = '';
  newNumber: number = 0;
  temporalNumber!: number;

  agregarNumeros() {
    if (this.newNumber == 0) {
      alert('Pero que haces?!?!?!, INGRESA UN NUMERO!!');
      return;
    }
    this.textNumeroMayor = '';
    this.numeros.push(this.newNumber);
    this.temporalNumber = this.numeros.length + 1;
    this.ingresaNumeros = 'Ingresa el numero ' + this.temporalNumber;
    this.newNumber = 0;
    if (this.numeros.length == 5) {
      this.numeroMayor = Math.max(...this.numeros);
      this.textNumeroMayor = 'el numero mayor es ' + this.numeroMayor;
      this.numeros = [];
      this.ingresaNumeros = 'Ingresa el numero 1';
    }
  }

  opcionesFrutas: string[] = [
    'Selecciona una opcion',
    'Manzana',
    'Plátano',
    'Naranja',
    'Fresa',
    'Uva',
    'Piña',
    'Mango',
    'Kiwi',
    'Melón',
    'Sandía',
    'Durazno',
    'Pera',
    'Papaya',
    'Cereza',
    'Limón',
  ];

  frutasUrls: { [key: string]: string } = {
    Manzana:
      'https://andreuprados.com/wp-content/uploads/2017/01/apple_0.jpg.webp',
    Plátano:
      'https://thisfruta.com/cdn/shop/products/platano_600x.jpg?v=1615478887',
    Naranja:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/800px-Oranges_-_whole-halved-segment.jpg',
    Fresa:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2kS5KTJqHvC9KQjVwFXsTL8PTJryKhSB4g&s',
    Uva: 'https://www.lechepuleva.es/documents/13930/203222/uva_g.jpg/4ee0cd1b-f0d3-41cc-80b8-17e5a80b834a?t=1422618555000',
    Piña: 'https://www.lechepuleva.es/documents/13930/203222/pi%C3%B1a_g.jpg/c585227d-e694-464d-87d7-3f2143dd33d9?t=1423480442000',
    Mango:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdESsvMTS9J2KnBpgYBO0cXrcMiEB5Qg2MaA&s',
    Kiwi: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdESsvMTS9J2KnBpgYBO0cXrcMiEB5Qg2MaA&s',
    Melón: 'https://www.gob.mx/cms/uploads/image/file/403046/mel_n_1.jpg',
    Sandía:
      'https://elpoderdelconsumidor.org/wp-content/uploads/2021/08/sandia.jpg',
    Durazno:
      'https://elpoderdelconsumidor.org/wp-content/uploads/2022/08/durazno-p.jpg',
    Pera: 'https://www.herbazest.com/imgs/d/8/7/551784/pera.jpg',
    Papaya:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAXtZXW0NwXfeThZW9BbWaT36At6cOjfv4Q&s',
    Cereza:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVOETA3SxvFvW4aHwMdeJSmWvyN-kKLtAVA&s',
    Limón:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTzIYUhcDhlhdm0iwuqciy1zI0AIpHQDd1Q&s',
  };

  frutas2: Array<string> = [];
  opcionSeleccionada: string = '';
  imagenUrl!: String;

  seleccionarOpcion(event: any) {
    this.opcionSeleccionada = event.target.value;
    this.obtenerUrl()
    console.log(this.opcionSeleccionada);
    this.agregarFrutas();
    event.target.value = 'Selecciona una opcion';
  }

  agregarFrutas() {
    if (this.frutas2.length < 5) {
      this.frutas2.push(this.opcionSeleccionada);
      console.log(this.frutas2);
      this.frutas2.sort();
    } else {
      alert('No puedes agregar más de 5 frutas');
    }
  }

  obtenerUrl() {
    console.log(this.imagenUrl);
    this.imagenUrl = this.frutasUrls[this.opcionSeleccionada];
  }
}
