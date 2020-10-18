import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginRegistrationSetupService } from '../login-registration-setup.service';
import { UserRegistrationComponent } from './user-registration.component';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ UserRegistrationComponent ],
      providers: [LoginRegistrationSetupService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check form feilds', () => {
    const RegistrationForm = {
                user_name:  '',
                password: '',
                confirm_password: ''
              };
    expect(component.RegistrationForm.value).toEqual(RegistrationForm);
  });
  it('should invalidate form', () => {
    component.RegistrationForm.controls.user_name.setValue('');
    component.RegistrationForm.controls.password.setValue('');
    component.RegistrationForm.controls.confirm_password.setValue('');
    expect(component.RegistrationForm.valid).toBeFalsy();
  });
  it('should validate form', () => {
    component.RegistrationForm.controls.user_name.setValue('user');
    component.RegistrationForm.controls.password.setValue('1234');
    component.RegistrationForm.controls.confirm_password.setValue('1234');
    expect(component.RegistrationForm.valid).toBeTruthy();
  });
});
