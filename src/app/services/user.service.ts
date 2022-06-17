import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interfaces/registerForm.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  url: string = environment.base_url;

  createUser( formData: RegisterForm ){

    let userDTO = new User(formData.name, formData.email, undefined, undefined , formData.password );
    
    return this.http.post(`${this.url}/Auth/Register`, userDTO)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token);
        })
    );
    
  }
}
