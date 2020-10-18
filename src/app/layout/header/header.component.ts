import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from '../../theme.service';
import { LoginRegistrationSetupService } from '../../setup/login-registration-setup.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  darkTheme = new FormControl(false);

  constructor(
    private themeService: ThemeService,
    private loginRegistrationSetupService: LoginRegistrationSetupService
  ) { }

  ngOnInit(): void {
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
