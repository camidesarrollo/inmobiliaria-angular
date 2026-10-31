import { Component, OnInit, inject, signal } from '@angular/core';
import {AuthService} from '@core/auth/services/auth.service';
import {User} from '@core/auth/models/user';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    imports: [RouterLink],
    host: {
        '(document:keydown.escape)': 'cerrarMenu()'
    }
})
export class NavComponent implements OnInit {
  authService = inject(AuthService);
  private router = inject(Router);

  validador:boolean;
  menuAbierto = signal(false);

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
  alternarMenu(){
    this.menuAbierto.update(abierto => !abierto);
  }
  cerrarMenu(){
    this.menuAbierto.set(false);
  }
  cerrarSeccion(){
    this.authService.logout();
    window.location.reload();
  }
}
