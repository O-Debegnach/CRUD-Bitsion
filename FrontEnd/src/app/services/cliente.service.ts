import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ClienteService {
  apiUrl = 'api/customers/';

  clientes: Cliente[];
  private actualizarFormulario = new BehaviorSubject<Cliente>({} as any);

  actualizar(cliente: Cliente) {
    this.actualizarFormulario.next(cliente);
  }

  obtenerCliente(): Observable<Cliente> {
    return this.actualizarFormulario.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  agregarCliente(customer: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.apiUrl, customer);
  }

  cargarCliente(id: number) {
    return this.httpClient.get<Cliente>(this.apiUrl + id);
  }

  cargarClientes() {
    this.httpClient.get<Cliente[]>(this.apiUrl).subscribe((data) => {
      this.clientes = data;
    });
  }

  actualizarCliente(id:number, cliente:Cliente){
    return this.httpClient.put(this.apiUrl + id, cliente);
  }

  eliminarCliente(id: number) {
    return this.httpClient.delete<Cliente>(this.apiUrl + id);
  }
}
