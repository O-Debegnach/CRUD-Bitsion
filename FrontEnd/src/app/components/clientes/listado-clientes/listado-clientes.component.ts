import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css'],
})
export class ListadoClientesComponent implements OnInit {
  constructor(
    public clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteService.cargarClientes();
  }

  eliminarCliente(id: number) {
    if (confirm('¿Esta seguro de eliminar al cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe((response) => {
        this.toastr.warning(
          'El registro del cliente se elimino correctamente',
          'Cliente Eliminado'
        );
        this.clienteService.cargarClientes();
        this.router.navigate(['/']);
      });
    }
  }

  editar(cliente:Cliente){
    this.clienteService.actualizar(cliente);
  }
}
