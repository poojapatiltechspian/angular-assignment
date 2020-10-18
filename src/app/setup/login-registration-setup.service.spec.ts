import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { LoginRegistrationSetupService } from './login-registration-setup.service';
import { ErrorHandlingService } from '../error-handling.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginRegistrationSetupService', () => {
  let service: LoginRegistrationSetupService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LoginRegistrationSetupService, ErrorHandlingService]
    });
    service = TestBed.inject(LoginRegistrationSetupService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should test http client get for user details', () => {
    const saveData =  {
          id: 1,
          name: 'Book1',
          display_name: 'book1',
          author: 'author1',
          price: '120',
          description: 'descriptioon',
          img_path: 'path',
        };

    service.registerUser(saveData).subscribe((post) => {
      expect(saveData).toBe(post);
    });
    const req = http.expectOne('http://localhost:3000/user-details/');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(saveData);
  });
});
