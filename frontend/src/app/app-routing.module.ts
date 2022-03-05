import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalProductsPageComponent } from './Pages/final-products-page/final-products-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ProductsPageComponent } from './Pages/products-page/products-page.component';

const routes: Routes = [
  { path: "", component:HomePageComponent},
  { path: "products", component:ProductsPageComponent},
  { path: "productsForYou", component:FinalProductsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

