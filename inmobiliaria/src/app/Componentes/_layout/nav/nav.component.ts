import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Servicios/auth.service';
import {User} from '../../../Interfaces/user';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthService]
})
export class NavComponent implements OnInit {
  validador:boolean;
  constructor(public authService: AuthService, private router: Router) { }

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
