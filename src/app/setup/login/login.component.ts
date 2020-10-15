import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginRegistrationSetupService } from '../login-registration-setup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  LoginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginRegistrationSetupService: LoginRegistrationSetupService,
    private router: Router
) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.LoginForm = this.fb.group({
      user_name:  ['', [Validators.required, Validators.maxLength(200), Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]],
    });
  }
  onSubmit() {
    console.log(this.LoginForm.value);
    this.loginRegistrationSetupService.LoginUser(this.LoginForm.value.user_name, this.LoginForm.value.password).subscribe((data)=> {
      console.log(data[0] === undefined);
      if(data[0] === undefined) {
        alert('User is not register!');
        this.LoginForm.reset()
      }else {
        alert('Login successful!')
        this.router.navigate(['/home']);
      }
    })
  }
}
