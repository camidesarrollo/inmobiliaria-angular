import { ChangeDetectorRef, Component,OnDestroy,  OnInit, ViewChild } from '@angular/core';
import {PropiedadesService} from '../../../Servicios/propiedades.service';
import {Propiedades} from '../../../Model/propiedades';
import { NgForm } from "@angular/forms";
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-administracion-propiedades',
  templateUrl: './administracion-propiedades.component.html',
  styleUrls: ['./administracion-propiedades.component.css'],
  providers: [PropiedadesService],
})
export class AdministracionPropiedadesComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger  = new Subject();
  constructor(public propiedadesService: PropiedadesService, private readonly chRef: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }
      }
    };
    this.getPropiedades();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.chRef.detectChanges();
      this.dtTrigger.next();
    });
  }
  agregarPropiedades(form?: NgForm) {
    if (form.value._id) {
      this.propiedadesService.putPropiedades(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.getPropiedades();
        this.rerender();        
      });
    } else {
      this.propiedadesService.postPropiedad(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.getPropiedades();
        this.rerender();
      })
    }
  }

  getPropiedades() {
    this.propiedadesService.getPropiedades().subscribe((res: Propiedades[]) => {
      this.propiedadesService.propiedades = res;
      this.dtTrigger.next();
    });
  }

  editarPropiedad(propiedad: Propiedades){
    this.propiedadesService.selectedPropiedades = propiedad;
    
  }

  eliminarPropiedad(_id:string, form: NgForm){
    if(confirm("Esta seguro que desea eliminar esta propiedad")){
      this.propiedadesService.deletePropiedad(_id).subscribe((res)=>{
        this.getPropiedades();
        this.resetForm(form);
      })
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.propiedadesService.selectedPropiedades = new Propiedades();
    }
  }
  
}
