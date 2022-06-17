import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/Login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.base_url;

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
        localStorage.setItem('token', resp.token);
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
