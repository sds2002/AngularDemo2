import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, 
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
]; // 👈 must exist

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 👈 must use forRoot
  exports: [RouterModule]
})
export class AppRoutingModule { }
