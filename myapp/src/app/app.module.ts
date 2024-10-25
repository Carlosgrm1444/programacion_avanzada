import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { PortafolioComponent } from './content/portafolio/portafolio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { Examen2Component } from './content/examen2/examen2.component';

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
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCGPFhIR-UEEHAjXztKMAxgAtwMAxP11-8',
      authDomain: 'fcacs-uat.firebaseapp.com',
      projectId: 'fcacs-uat',
      storageBucket: 'fcacs-uat.appspot.com',
      messagingSenderId: '639428142431',
      appId: '1:639428142431:web:dba71c3b0178b27b9d42ea',
      measurementId: 'G-Y35F6CD5Z5',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
