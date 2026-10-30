import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription } from '@angular/material/expansion';
import { AdministracionPropiedadesComponent } from '../administracion-propiedades/administracion-propiedades.component';
import { AdministracionUsuarioComponent } from '../administracion-usuario/administracion-usuario.component';

@Component({
    selector: 'app-administracion',
    templateUrl: './administracion.component.html',
    styleUrls: ['./administracion.component.css'],
    imports: [MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, AdministracionPropiedadesComponent, AdministracionUsuarioComponent]
})
export class AdministracionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
