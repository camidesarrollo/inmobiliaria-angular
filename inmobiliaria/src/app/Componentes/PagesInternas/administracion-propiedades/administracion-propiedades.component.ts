import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import {PropiedadesService} from '../../../Servicios/propiedades.service';
import {Propiedades} from '../../../Model/propiedades';
import { NgForm, FormsModule } from "@angular/forms";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PaginadorEspanol } from '../../../Servicios/paginador-espanol';

@Component({
    selector: 'app-administracion-propiedades',
    templateUrl: './administracion-propiedades.component.html',
    styleUrls: ['./administracion-propiedades.component.css'],
    providers: [PropiedadesService, { provide: MatPaginatorIntl, useClass: PaginadorEspanol }],
    imports: [
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
],
})
export class AdministracionPropiedadesComponent implements OnInit, AfterViewInit {
  propiedadesService = inject(PropiedadesService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnas = ['nombre', 'bano', 'pieza', 'ubicacion', 'direccion', 'valor', 'metrosCuadrados', 'descripcion',
    'inmobiliaria', 'recidencia', 'tipo', 'venta', 'urlPlano', 'urlPropiedad', 'accion'];
  dataSource = new MatTableDataSource<Propiedades>([]);

  ngOnInit(): void {
    this.getPropiedades();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  filtrar(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.paginator?.firstPage();
  }
  agregarPropiedades(form?: NgForm) {
    const peticion = form.value._id
      ? this.propiedadesService.putPropiedades(form.value)
      : this.propiedadesService.postPropiedad(form.value);
    peticion.subscribe(() => {
      this.resetForm(form);
      this.getPropiedades();
    });
  }

  getPropiedades() {
    this.propiedadesService.getPropiedades().subscribe((res: Propiedades[]) => {
      this.propiedadesService.propiedades = res;
      this.dataSource.data = res;
    });
  }

  editarPropiedad(propiedad: Propiedades){
    this.propiedadesService.selectedPropiedades = { ...propiedad };
  }

  eliminarPropiedad(_id:string, form: NgForm){
    if(confirm("Esta seguro que desea eliminar esta propiedad")){
      this.propiedadesService.deletePropiedad(_id).subscribe(()=>{
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
