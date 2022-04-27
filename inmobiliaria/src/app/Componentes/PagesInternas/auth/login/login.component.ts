import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../../Servicios/auth.service';
import {User} from '../../../../Interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }



  ngOnInit(): void {
  }
  onLogin(form: { value: User; }): void {
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/');
    });
  }

}
