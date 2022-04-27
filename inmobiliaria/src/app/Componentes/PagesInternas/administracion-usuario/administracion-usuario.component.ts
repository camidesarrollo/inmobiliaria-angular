import { ChangeDetectorRef, Component,OnDestroy,  OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../../../Servicios/auth.service';
import {Auth} from '../../../Model/auth';
import { NgForm } from "@angular/forms";
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-administracion-usuario',
  templateUrl: './administracion-usuario.component.html',
  styleUrls: ['./administracion-usuario.component.css'],
  providers:[AuthService]
})
export class AdministracionUsuarioComponent implements OnInit {

  constructor(public authService: AuthService) { }

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
