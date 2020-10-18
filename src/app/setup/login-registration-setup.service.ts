import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './model/user.model';
import { Router } from '@angular/router';
import { retry, catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../error-handling.service';
@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationSetupService {

  baseurl = environment.baseUrl;
  constructor(
    private http: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) { }

  registerUser(user): Observable<User> {
    const url = this.baseurl + 'user-details/';
    return this.http.post<User>(url, user)
    .pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );
  }
  LoginUser(username, password): any {
    const url = this.baseurl + 'user-details?' + 'user_name=' + username + '&password=' + password;
    this.http.get(url).subscribe((data) => {
      if (data[0] === undefined) {
        alert('User is not register!');
      }else {
        alert('Login successful!');
        const jsonData = JSON.stringify(data[0]);
        localStorage.setItem('user', jsonData);
        this.router.navigate(['/home']);
      }
    });
  }
  Logout(): void {
    localStorage.clear();
    this.router.navigate(['/user/login']);
  }
}
