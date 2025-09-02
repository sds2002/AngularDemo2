Create Feature Modules (for lazy loading)
ng generate module home --route home --module app.module
ng generate module products --route products --module app.module
ng generate module about --route about --module app.module

What happens here?

Each command creates a feature module (home.module.ts, products.module.ts, about.module.ts).

It also creates a component inside each module (home.component.ts, etc.).

Angular automatically updates app-routing.module.ts with lazy loading configuration.

3. Check app-routing.module.ts

It should look like this:

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'home' } // Wildcard for invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


👉 Notice loadChildren. That’s lazy loading — the module is loaded only when the user visits that route.

4. Feature Module Routing Example (e.g., products-routing.module.ts)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent } // default route inside products
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}


👉 Each feature module has its own routing file.

5. Add Navigation Links (app.component.html)
<nav>
  <a routerLink="/home">Home</a> |
  <a routerLink="/products">Products</a> |
  <a routerLink="/about">About</a>
</nav>
<hr>
<router-outlet></router-outlet>


👉 routerLink is used instead of <a href> to prevent full-page reloads.
👉 <router-outlet> is the placeholder where Angular will render routed components.