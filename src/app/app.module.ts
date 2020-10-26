import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
// import { reducer } from './ngrx-example/reducers/tutorial.reducer';
// import { counterReducer } from './ngrx-example2/reducers/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddLinksComponent } from './add-links/add-links.component';
import { RouterModule } from '@angular/router';
import { CommonService } from './common.service';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
// import { ReadComponent } from './ngrx-example/read/read.component';
// import { CreateComponent } from './ngrx-example/create/create.component';
// import { MyCounterComponent } from './ngrx-example2/my-counter/my-counter.component';
import { Store } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { Product2Module } from './product/product2.module';

import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { ButtonComponent } from './layout/button/button.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { IndiviualProductComponent } from './dashboard/indiviual-product/indiviual-product.component';
import { IndiviualProductCardComponent } from './dashboard/indiviual-product-card/indiviual-product-card.component';
@NgModule({
  declarations: [
    AppComponent,
    AddLinksComponent,
    FlexLayoutComponent,
    GridLayoutComponent,
    // ReadComponent,
    // CreateComponent,
    // MyCounterComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    ButtonComponent,
    DashboardCardComponent,
    IndiviualProductComponent,
    IndiviualProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    Product2Module,
    // StoreModule.forRoot({tutorial: reducer, count: counterReducer}),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [CommonService, Store],
  bootstrap: [AppComponent],
})
export class AppModule { }
