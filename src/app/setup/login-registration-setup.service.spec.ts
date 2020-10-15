import { TestBed } from '@angular/core/testing';

import { LoginRegistrationSetupService } from './login-registration-setup.service';

describe('LoginRegistrationSetupService', () => {
  let service: LoginRegistrationSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRegistrationSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
