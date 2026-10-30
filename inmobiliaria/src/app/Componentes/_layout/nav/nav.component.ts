import { Component, OnInit, inject } from '@angular/core';
import {AuthService} from '../../../Servicios/auth.service';
import {User} from '../../../Interfaces/user';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    imports: [RouterLink]
})
export class NavComponent implements OnInit {
  authService = inject(AuthService);
  private router = inject(Router);

  validador:boolean;

  ngOnInit(): void {
    this.validador = this.comprobarAuth();
  }
  comprobarAuth(){
    if(localStorage.getItem('ACCESS_TOKEN')){
      return true;
    }else{
      return false;
    }
  }
  cerrarSeccion(){
    this.authService.logout();
    window.location.reload();
  }
}
