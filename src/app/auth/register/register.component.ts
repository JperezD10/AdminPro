import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm = this.form.group({
    name: ['Juli', [Validators.required, Validators.minLength(3)]],
    email: ['jperezdemonty@live.com.ar', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['123456', [Validators.required, Validators.minLength(6)]],
    terms: [true, [Validators.requiredTrue]],
  });

  private formSubmitted: boolean = false;

  constructor(private form:FormBuilder, private userService: UserService, private router: Router) { }

  createUser(){
    this.formSubmitted = true;

    if(this.registerForm.invalid){
      return;
    }

    this.userService.createUser(this.registerForm.value)
      .subscribe( (resp: any) =>{
        swal.fire('User created', `User ${resp.user.name} created successfully`, 'success');
        this.router.navigate(['/dashboard']);
      }, (error) =>{ 
        swal.fire('Error', error.error, 'error');
        return;
      });

  }

  fieldNotValid(field: string): boolean{
    let exit: boolean = false; 
    if(this.registerForm.get(field)?.invalid && this.formSubmitted){
      exit = true;
    }
    return exit;
  }

  confirmPassword(): boolean{
    return (this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value) && this.formSubmitted;
  }
}
