import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {AuthService} from '@core/auth/services/auth.service';
import {User} from '@core/auth/models/user';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [FormsModule, RouterLink]
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);




  ngOnInit(): void {
  }
  onLogin(form: { value: User; }): void {
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/');
    });
  }

}
