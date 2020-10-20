import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../header/header.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DashboardCardComponent } from '../../dashboard/dashboard-card/dashboard-card.component';

import { LoginRegistrationSetupService } from '../../setup/login-registration-setup.service';
import { ThemeService } from '../../shared/services/theme.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent, HeaderComponent, DashboardCardComponent ],
      imports: [
        ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, FormsModule, BrowserAnimationsModule],
      providers: [LoginRegistrationSetupService, ThemeService,
        provideMockStore({
          initialState: {
            appModel: {
              data: [],
              isLoggedIn: false,
              requestBody: {},
              id: 1
            }
          }
        })
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
