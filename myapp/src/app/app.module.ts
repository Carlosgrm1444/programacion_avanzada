import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContentComponent } from './content/content.component';
import { Examen2Component } from './content/examen2/examen2.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { PortafolioComponent } from './content/portafolio/portafolio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrudService } from './servicios/crud.service';

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    InicioComponent,
    PortafolioComponent,
    CalculatorComponent,
    Examen2Component,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAVkIPV5mcwzouaHhHq6NKvjd1ooIXbQMY',
      authDomain: 'bolsa-trabajo-uat.firebaseapp.com',
      projectId: 'bolsa-trabajo-uat',
      storageBucket: 'bolsa-trabajo-uat.firebasestorage.app',
      messagingSenderId: '1078112817965',
      appId: '1:1078112817965:web:1151ce0e0421665e2bb9a4',
      // measurementId: 'G-Y35F6CD5Z5',
    }),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
