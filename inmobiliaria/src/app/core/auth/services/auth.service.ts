import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '@core/auth/models/user';
import {JwtResponse} from '@core/auth/models/jwt-response';
import {API_ENDPOINTS} from '@core/config/api.config';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpClient = inject(HttpClient);

  AUTH_SERVER: string = API_ENDPOINTS.auth;
  authSubject = new BehaviorSubject(false);
  private token: string;
  register(user: User): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`,
      user).pipe(tap(
        (res: JwtResponse) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }
  login(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/login`,
      user).pipe(tap(
        (res: JwtResponse) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
  loggedIn() {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }

  getTokenBoolean(): boolean{
    if (!this.token) {
      return false;
    }
    return true;
  }
  
}