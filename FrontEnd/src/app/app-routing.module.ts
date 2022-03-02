import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormularioComponent } from './components/clientes/formulario/formulario.component';
import { DetalleClienteComponent } from './components/clientes/detalle-cliente/detalle-cliente.component';
export const routes: Routes = [
  { path: '', component: ClientesComponent },
  {
    path: 'customers',
    component: ClientesComponent,
    children: [{ path: ':id', component: DetalleClienteComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
