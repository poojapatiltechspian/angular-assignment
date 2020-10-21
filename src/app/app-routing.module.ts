import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLinksComponent } from './add-links/add-links.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { ReadComponent } from './ngrx-example/read/read.component';
import { MyCounterComponent } from './ngrx-example2/my-counter/my-counter.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { LayoutComponent  } from './layout/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule)
      },
      {
        path: 'home',
        component: DashboardComponent,
      },
      {
        path: 'crud-oprations',
        component: AddLinksComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'add-product',
        component: AddProductComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'edit-product/:id',
        component: AddProductComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'flex-Layout',
        component: FlexLayoutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'grid-layout',
        component: GridLayoutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ngrx-tutorial-example2',
        component: ReadComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ngrx-tutorial-example1',
        component: MyCounterComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'product-list',
        component: ProductListComponent,
        canActivate: [AuthGuard],
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'user/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
