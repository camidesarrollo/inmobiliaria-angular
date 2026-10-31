import { Component, OnInit, inject } from '@angular/core';
import {UsuariosService} from '../../../application/services/usuarios.service';
import {Auth} from '../../../domain/models/auth.model';
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-administracion-usuario',
    templateUrl: './administracion-usuario.component.html',
    styleUrls: ['./administracion-usuario.component.css'],
})
export class AdministracionUsuarioComponent implements OnInit {
  usuariosService = inject(UsuariosService);


  ngOnInit(): void {
    console.log("OK");
    this.getUsuarios();
  }
  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe((res: Auth[]) => {
      console.log("entre aqui");
      this.usuariosService.usuarios = res;
    });
  }
}
