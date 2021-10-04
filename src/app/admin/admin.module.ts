import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MaterialDesign } from '../material/material';
import { ImageComponent } from './image/image.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
//untuk komunikasi data dengan server, import HTTPCLIENTMODUL

const routes : Routes = [
{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'product',
      component: ProductComponent
    },
    {
      path: '',
      pathMatch: "full",
      component: DashboardComponent
    }
  ]
}
]


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HeaderComponent,
    ImageComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ], 
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
