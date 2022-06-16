import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/Login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.base_url;

  constructor(private http:HttpClient) { }

  login( login: Login){
    return this.http.post(`${this.url}/Auth`, login);
  }
}
