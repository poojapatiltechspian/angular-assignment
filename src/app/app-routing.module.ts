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
const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path:'crud-oprations',
        component: AddLinksComponent
      },
      {
        path:'add-product',
        component: AddProductComponent
      },
      {
        path:'edit-product/:id',
        component: AddProductComponent
      },
      {
        path:'flex-Layout',
        component: FlexLayoutComponent
      },
      {
        path: 'grid-layout',
        component: GridLayoutComponent
      },
      {
        path: 'ngrx-tutorial-example',
        component: ReadComponent
      },
      {
        path: 'ngrx-tutorial-example2',
        component: MyCounterComponent
      },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
    ]
  },

  {
    path:'',
    redirectTo: 'user/login',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
