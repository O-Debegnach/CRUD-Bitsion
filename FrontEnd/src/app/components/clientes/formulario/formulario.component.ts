import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription;
  cliente: Cliente;
  idCliente = 0;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      id: 0,
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.maxLength(50)]],
      identificacion: ['', [Validators.required, Validators.maxLength(50)]],
      edad: [0, [Validators.required, Validators.min(18), Validators.max(70)]],
      genero: ['', [Validators.required, Validators.maxLength(50)]],
      diabetico: [false, [Validators.required]],
      maneja: [false, [Validators.required]],
      usaLentes: [false, [Validators.required]],
      isActivo: [false, [Validators.required]],
      enfermedades: ['', [Validators.maxLength(200)]],
      atributosAdicionales: ['', [Validators.maxLength(200)]],
    });
  }

  ngOnInit(): void {
    this.subscription = this.clienteService
      .obtenerCliente()
      .subscribe((data) => {
        this.cliente = data;
        this.form.patchValue({
          edad: this.cliente.age,
          nombre: this.cliente.name,
          genero: this.cliente.gender,
          maneja: this.cliente.hasLicense,
          apellido: this.cliente.lastName,
          diabetico: this.cliente.diabetic,
          usaLentes: this.cliente.useGlasses,
          enfermedades: this.cliente.diseases,
          identificacion: this.cliente.identification,
          atributosAdicionales: this.cliente.aditionalAttributes,
          isActivo: this.cliente.isActive,
        });
        this.idCliente = data.id | 0;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  editarCliente() {
    const cliente: Cliente = new Cliente();

    cliente.id = this.cliente.id;
    cliente.age = this.form.get('edad')?.value;
    cliente.name = this.form.get('nombre')?.value;
    cliente.identification = this.form.get('identificacion')?.value;
    cliente.lastName = this.form.get('apellido')?.value;
    cliente.gender = this.form.get('genero')?.value;
    cliente.diseases = this.form.get('enfermedades')?.value;
    cliente.aditionalAttributes = this.form.get('atributosAdicionales')?.value;
    cliente.diabetic = this.form.get('diabetico')?.value;
    cliente.hasLicense = this.form.get('maneja')?.value;
    cliente.useGlasses = this.form.get('usaLentes')?.value;
    cliente.isActive = this.form.get('isActivo')?.value;

    this.clienteService.actualizarCliente(this.idCliente, cliente).subscribe(
      (response) => {
        this.toastr.info(
          'Cliente actializado',
          'El cliente fue actualizado de forma exitosa'
        );
        this.clienteService.cargarClientes();
        this.form.reset();
        this.router.navigate(['/customers', this.idCliente]);
      },
      (error) => {
        this.toastr.error('Ha ocurrido un error');
      }
    );
  }

  agregarCliente() {
    const cliente: Cliente = new Cliente();

    cliente.age = this.form.get('edad')?.value;
    cliente.name = this.form.get('nombre')?.value;
    cliente.identification = this.form.get('identificacion')?.value;
    cliente.lastName = this.form.get('apellido')?.value;
    cliente.gender = this.form.get('genero')?.value;
    cliente.diseases = this.form.get('enfermedades')?.value;
    cliente.aditionalAttributes = this.form.get('atributosAdicionales')?.value;
    cliente.diabetic = this.form.get('diabetico')?.value;
    cliente.hasLicense = this.form.get('maneja')?.value;
    cliente.useGlasses = this.form.get('usaLentes')?.value;
    cliente.isActive = this.form.get('isActivo')?.value;

    this.clienteService.agregarCliente(cliente).subscribe(
      () => {
        this.toastr.success(
          'Cliente agregado',
          'El cliente fue agregado de forma exitosa'
        );
        this.clienteService.cargarClientes();
        this.form.reset();
        this.router.navigate(['']);
      },
      () => {
        this.toastr.error('Ha ocurrido un error');
      }
    );
  }
}
