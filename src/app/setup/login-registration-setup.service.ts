import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationSetupService {

  baseurl = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  registerUser(user): Observable<User> {
    const url = this.baseurl + 'user-details/';
    return this.http.post<User>(url, user);
  }
  LoginUser(username, password) {
    const url = this.baseurl + 'user-details?' + 'user_name=' + username + '&password=' + password;
    return this.http.get(url);
  }
  Authentication(){
    localStorage.setItem('user', 'Pooja')
  }
  checkAuthentication() {
    let user = 'Pooja';
    return (localStorage.getItem('user') === user);
  }
}
