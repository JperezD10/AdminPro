import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public LoginForm = this.form.group({
    email: ['jperezdemonty@live.com.ar', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  private formSubmitted: boolean = false;

  constructor( private router: Router, private form:FormBuilder, private authService: AuthService ) { }

  login(){
    this.formSubmitted = true;
    if(this.LoginForm.invalid){
      return;
    }
    this.authService.login(this.LoginForm.value)
      .subscribe((resp) =>{
        this.router.navigate(['/dashboard']);
      }, (err) =>{
        Swal.fire({icon: 'error',title: 'Error', text: err.error.error})
      });
    }

  fieldNotValid(field: string): boolean{
    let exit: boolean = false; 
    if(this.LoginForm.get(field)?.invalid && this.formSubmitted){
      exit = true;
    }
    return exit;
  }
}
