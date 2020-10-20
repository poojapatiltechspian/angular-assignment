import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuardService]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return true if local storage is not null', () => {
    if (spyOn(localStorage, 'getItem') !== null) {
      expect(service.canActivate).toBeTruthy();
    }
  });
  it('should be return false if local storage is null', () => {
    if (spyOn(localStorage, 'getItem') === null) {
      expect(service.canActivate).toBeFalsy();
    }
  });
});
