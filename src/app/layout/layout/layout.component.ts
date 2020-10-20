import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from '../../shared/services/theme.service';
import { LoginRegistrationSetupService } from '../../setup/login-registration-setup.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  darkTheme = new FormControl(false);
  userName: any;
  constructor(
    private themeService: ThemeService,
    private loginRegistrationSetupService: LoginRegistrationSetupService
  ) { }

  ngOnInit(): void {
    // const user = JSON.parse(localStorage.getItem('user'));
    // this.userName = user.user_name;
    this.theme();
  }
  theme(): any {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }
  logout(): any {
    this.loginRegistrationSetupService.Logout();
  }
}
