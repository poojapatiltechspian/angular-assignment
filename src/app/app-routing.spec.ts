import { fakeAsync, TestBed, tick, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, convertToParamMap, RouterLinkWithHref } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddLinksComponent } from './add-links/add-links.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
// import { ReadComponent } from './ngrx-example/read/read.component';
// import { MyCounterComponent } from './ngrx-example2/my-counter/my-counter.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { LayoutComponent  } from './layout/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndiviualProductComponent } from './dashboard/indiviual-product/indiviual-product.component';
import { ButtonComponent } from './layout/button/button.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { IndiviualProductCardComponent } from './dashboard/indiviual-product-card/indiviual-product-card.component';
// import { CreateComponent } from './ngrx-example/create/create.component';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { CommonService } from './common.service';
import { ErrorHandlingService } from './shared/services/error-handling.service';
import { ThemeService  } from './shared/services/theme.service';

describe('app component routing example', () => {
    let router: Router;
    // let appComponent: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let debugElement: DebugElement;
    let location: Location;
    let auth: AuthGuardService;
    let commonService: CommonService;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [
                AppComponent,
                AddLinksComponent,
                FlexLayoutComponent,
                GridLayoutComponent,
                // ReadComponent,
                // MyCounterComponent,
                ProductListComponent,
                AddProductComponent,
                LayoutComponent,
                DashboardComponent,
                IndiviualProductComponent,
                ButtonComponent,
                HeaderComponent,
                DashboardCardComponent,
                IndiviualProductCardComponent,
                // CreateComponent
            ],
            providers: [
                CommonService,
                AuthGuardService,
                ErrorHandlingService,
                ThemeService
            ]
        }).compileComponents();
    }));
    beforeEach(() => {
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);

        fixture = TestBed.createComponent(AppComponent);
        debugElement = fixture.debugElement;
        auth = TestBed.inject(AuthGuardService);
        commonService = TestBed.inject(CommonService);

        router.initialNavigation();
    });
    it('should redirect to default path', fakeAsync(() => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(location.path()).toBe('/home');
        });
    }));
    it('should redirect to default path when user enters any false path', fakeAsync(() => {
        router.navigate(['/false-path']);
        tick();
        expect(location.path()).toBe('/home');
    }));

    it('should redirect to default path when user enters any false path', fakeAsync(() => {
        router.navigate(['/user/login']);
        tick();
        expect(location.path()).toBe('/user/login');
    }));
});

