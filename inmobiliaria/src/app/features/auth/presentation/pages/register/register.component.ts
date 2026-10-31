import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {AuthService} from '@core/auth/services/auth.service';
import {User} from '@core/auth/models/user';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [FormsModule, RouterLink]
})
export class RegisterComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);


  ngOnInit(): void {
  }
  onRegister(form: { value: User; }): void {
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth');
    });
  }
}
