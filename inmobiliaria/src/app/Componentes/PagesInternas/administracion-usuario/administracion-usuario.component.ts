import { Component, OnInit, inject } from '@angular/core';
import {AuthService} from '../../../Servicios/auth.service';
import {Auth} from '../../../Model/auth';
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-administracion-usuario',
    templateUrl: './administracion-usuario.component.html',
    styleUrls: ['./administracion-usuario.component.css'],
})
export class AdministracionUsuarioComponent implements OnInit {
  authService = inject(AuthService);


  ngOnInit(): void {
    console.log("OK");
    this.getUsuarios();
  }
  getUsuarios(){
    this.authService.getUsuarios().subscribe((res: Auth[]) => {
      console.log("entre aqui");
      this.authService.usuarios = res;
    });
  }
}
