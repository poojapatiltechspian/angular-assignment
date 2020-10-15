import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from '../../theme.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  darkTheme = new FormControl(false);
  constructor(
    private themeService: ThemeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }
  logout() {
    this.router.navigate(['/user/login']);
  }
}
