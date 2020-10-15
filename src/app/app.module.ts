import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx-example/reducers/tutorial.reducer';
import { counterReducer } from './ngrx-example2/reducers/counter.reducer';
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
import { ReadComponent } from './ngrx-example/read/read.component';
import { CreateComponent } from './ngrx-example/create/create.component';
import { MyCounterComponent } from './ngrx-example2/my-counter/my-counter.component';
import { Store } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { Product2Module } from './product/product2.module';

import { AppEffects } from './app.effects';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AddLinksComponent,
    FlexLayoutComponent,
    GridLayoutComponent,
    ReadComponent,
    CreateComponent,
    MyCounterComponent,
    LayoutComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    Product2Module,
    StoreModule.forRoot({tutorial: reducer, count: counterReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [CommonService, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
