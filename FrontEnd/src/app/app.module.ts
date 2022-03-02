import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/clientes/formulario/formulario.component';
import { ClientesComponent } from './components/clientes/clientes.component';

import { FooterComponent } from './components/footer/footer.component';
import { ClienteService } from './services/cliente.service';
import { ListadoClientesComponent } from './components/clientes/listado-clientes/listado-clientes.component';
import { DetalleClienteComponent } from './components/clientes/detalle-cliente/detalle-cliente.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FooterComponent,
    FormularioComponent,
    ListadoClientesComponent,
    DetalleClienteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
