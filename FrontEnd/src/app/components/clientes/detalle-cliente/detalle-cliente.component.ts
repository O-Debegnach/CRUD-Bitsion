import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css'],
})
export class DetalleClienteComponent implements OnInit {
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.clienteService
        .cargarCliente(this.route.snapshot.params['id'])
        .subscribe((response) => {
          this.cliente = response;
        });
    });
  }
}
