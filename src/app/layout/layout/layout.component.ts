import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from '../../shared/services/theme.service';
import { LoginRegistrationSetupService } from '../../setup/login-registration-setup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  darkTheme = new FormControl(false);
  userName: any;
  isLoginUser: boolean;
  isChecked: boolean;
  constructor(
    private themeService: ThemeService,
    private loginRegistrationSetupService: LoginRegistrationSetupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isChecked = false;
    this.loginRegistrationSetupService.getData().subscribe(wrapper => {
      if (wrapper) {
      this.isLoginUser = true;
    }else {
      this.isLoginUser = false;
    }
   });
    // console.log(this.isLoginUser);
    this.theme(false);
  }
  theme(event): any {
    if (event) {
      this.themeService.toggleDark();
    } else {
      this.themeService.toggleLight();
    }
    this.isChecked = !event;
  }
  logout(): any {
    this.loginRegistrationSetupService.Logout().subscribe ( (data) => {
      if (data) {
        this.loginRegistrationSetupService.sendData(false);
        this.router.navigate(['/home']);
      }
    });
  }
}
