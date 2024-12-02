import { Component } from '@angular/core';
import { CrudService } from '../../servicios/crud.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  form = {
    id: '',
    nombreEmpresa: '',
    logoEmpresa: '',
    oferta: '',
    requisitos: '',
    horarios: '',
    prestaciones: '',
    ubicacion: '',
    correos: '',
    telefonos: '',
    whatsapp: '',
  };

  coleccion!: string;
  registros: any;
  limite: number = 50;

  proceso_agregar: boolean = false;
  proceso_editar: boolean = false;

  ngOnInit(): void {
    this.coleccion = 'vacantes';
    this.crud.read(this.coleccion).then((response: any) => {
      this.registros = response;
      console.log(this.registros);
    });
  }

  recortarTexto(texto: string): string {
    return texto.length > this.limite
      ? texto.slice(0, this.limite) + '...'
      : texto;
  }

  publicar() {
    this.coleccion = 'vacantes';
    this.crud.create(this.coleccion, this.form).then((response: any) => {
      if (response) {
        alert('Se publico correctamente!');
        location.reload();
      } else {
        alert('Hubo un error');
      }
      console.log(response);
    });
  }

  agregar() {
    this.proceso_agregar = true;
    this.proceso_editar = false;

    this.form = {
      id: '',
      nombreEmpresa: '',
      logoEmpresa: '',
      oferta: '',
      requisitos: '',
      horarios: '',
      prestaciones: '',
      ubicacion: '',
      correos: '',
      telefonos: '',
      whatsapp: '',
    };
  }

  editar(registro: {
    nombreEmpresa: string;
    logoEmpresa: string;
    oferta: string;
    requisitos: string;
    horarios: string;
    prestaciones: string;
    ubicacion: string;
    correos: string;
    telefonos: string;
    whatsapp: string;
    id: string;
  }) {
    this.proceso_agregar = false;
    this.proceso_editar = true;
    this.form = registro;
  }

  actualizar() {
    console.log(this.form);
    this.crud.update(this.coleccion, this.form).then((response: any) => {
      if (response) {
        alert('¡Se actualizó correctamente!');
      } else {
        alert('Hubo un error');
      }
      console.log(response);
      location.reload();
    });
  }

  eliminar(registro: any) {
    if (confirm('¿Desea eliminar este registro?')) {
      this.crud.delete(this.coleccion, registro).then((response: any) => {
        if (response) {
          alert('¡Se eliminó correctamente!');
        } else {
          alert('Hubo un error');
        }
        console.log(response);
        location.reload();
      });
    }
  }

  constructor(private crud: CrudService) {}
}
