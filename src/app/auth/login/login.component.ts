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
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });

  private formSubmitted: boolean = false;

  constructor( private router: Router, private form:FormBuilder, private authService: AuthService ) { }

  login(){
    this.formSubmitted = true;
    if(this.LoginForm.invalid){
      return;
    }
    this.authService.login(this.LoginForm.value)
      .subscribe(() =>{

        this.LoginForm.get('remember')?.value ? localStorage.setItem("email", this.LoginForm.get('email')?.value) : localStorage.removeItem("email");

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
