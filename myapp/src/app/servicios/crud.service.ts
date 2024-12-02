import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  registros: any;

  constructor(private database: AngularFirestore) {}

  create(coleccion: string, form: any) {
    let promesa = new Promise((resolve, reject) => {
      this.database
        .collection(coleccion)
        .add(form)
        .then((response) => {
          let id = response.id;
          resolve(id);
          this.database.collection(coleccion).doc(id).update({
            id: id,
          });
        })
        .catch((err) => {
          reject(false);
        });
    });
    return promesa;
  }

  read(coleccion: any) {
    var promise = new Promise((resolve) => {
      this.registros = [];
      this.registros = this.database
        .collection(coleccion)
        .valueChanges()
        .subscribe((response) => {
          resolve(response);
        });
    });
    return promise;
  }

  update(
    coleccion: string,
    registro: {
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
    }
  ) {
    return this.database
      .collection(coleccion)
      .doc(registro.id)
      .update({
        nombreEmpresa: registro.nombreEmpresa,
        logoEmpresa: registro.logoEmpresa,
        oferta: registro.oferta,
        requisitos: registro.requisitos,
        horarios: registro.horarios,
        prestaciones: registro.prestaciones,
        ubicacion: registro.ubicacion,
        correos: registro.correos,
        telefonos: registro.telefonos,
        whatsapp: registro.whatsapp,
      })
      .then(() => {
        console.log('Documento actualizado correctamente');
        return true;
      })
      .catch((err) => {
        console.error('Error al actualizar el documento:', err);
        return false;
      });
  }

  delete(
    coleccion: string,
    registro: {
      id: string;
    }
  ) {
    let promesa = new Promise((resolve, reject) => {
      this.database
        .collection(coleccion)
        .doc(registro.id)
        .delete()
        .then((response) => {
          resolve(true);
        })
        .catch((err) => {
          reject(false);
        });
    });
    return promesa;
  }
}
