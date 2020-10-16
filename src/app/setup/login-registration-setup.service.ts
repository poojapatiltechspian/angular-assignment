import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationSetupService {

  baseurl = environment.baseUrl;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(user): Observable<User> {
    const url = this.baseurl + 'user-details/';
    return this.http.post<User>(url, user);
  }
  LoginUser(username, password): any {
    const url = this.baseurl + 'user-details?' + 'user_name=' + username + '&password=' + password;
    this.http.get(url).subscribe((data) => {
      if (data[0] === undefined) {
        alert('User is not register!');
      }else {
        alert('Login successful!');
        localStorage.setItem('user', JSON.stringify(data[0]));
        this.router.navigate(['/home']);
      }
    });
  }
  Logout(): void {
    localStorage.clear();
    this.router.navigate(['/user/login']);
  }
}
