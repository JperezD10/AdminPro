import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/Login.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.base_url;

  public loginUser?:User;
  constructor(private http:HttpClient, private router: Router) { }

  validateToken(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    
    return this.http.get<boolean>(`${this.url}/Auth`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).pipe(
      map(resp => true),
      //con el of hago un nuevo observable con el valor de false
      catchError( error => of(false))
    )
  }

  login( login: Login){
    return this.http.post(`${this.url}/Auth`, login)
    .pipe(
      tap( (resp:any) => {
        const { name,email,image,role,google,id } = resp.user;
        this.loginUser = new User(name, email, role, image, undefined, google, id);
        localStorage.setItem('token', resp.token);
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
