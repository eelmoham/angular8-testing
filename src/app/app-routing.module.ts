import { NgModule } from '@angular/core';
import { ViewProductComponent } from './view-product/view-product.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "product/:id", component: ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
