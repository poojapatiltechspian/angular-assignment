import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginRegistrationSetupService } from '../login-registration-setup.service';
describe('LoginComponent', () => {
  let fixture: any;
  let component;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [LoginRegistrationSetupService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check form feilds', () => {
    const loginForm = {
                user_name:  '',
                password: ''
              };
    expect(component.LoginForm.value).toEqual(loginForm);
  });
  it('should invalidate form', () => {
    component.LoginForm.controls.user_name.setValue('');
    component.LoginForm.controls.password.setValue('');
    expect(component.LoginForm.valid).toBeFalsy();
  });
  it('should Min Max length invalidate form', () => {
    component.LoginForm.controls.user_name.setValue('x');
    component.LoginForm.controls.password.setValue('x');
    expect(component.LoginForm.valid).toBeFalsy();
  });
  it('should validate form', () => {
    component.LoginForm.controls.user_name.setValue('user');
    component.LoginForm.controls.password.setValue('1234');
    expect(component.LoginForm.valid).toBeTruthy();
  });
});

