import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app'; // Tu componente Standalone

@NgModule({
  declarations: [
    // Dejamos esto vacío porque AppComponent es Standalone y no puede declararse acá
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent // <--- ¡LO MOVEMOS ACÁ! Como es standalone, se importa
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }