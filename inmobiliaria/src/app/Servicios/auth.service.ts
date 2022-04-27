import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../Interfaces/user';
import {Auth} from '../Model/auth';
import {JwtResponse} from '../Interfaces/jwt-response';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthService {
  AUTH_SERVER: string = "http://localhost:3000";
  readonly URL_API = "http://localhost:3000/api/usuarios";
  authSubject = new BehaviorSubject(false);
  private token: string;
  usuarios: Auth[];
  constructor(private httpClient: HttpClient) { }
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

  getUsuarios() {
    return this.httpClient.get<Auth[]>(this.URL_API);
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
    return !!localStorage.getItem('token');
  }

  getTokenBoolean(): boolean{
    if (!this.token) {
      return false;
    }
    return true;
  }
  
}