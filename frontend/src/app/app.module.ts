import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Components/header-component/header-component.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ProductsPageComponent } from './Pages/products-page/products-page.component';
import { FinalProductsPageComponent } from './Pages/final-products-page/final-products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomePageComponent,
    ProductsPageComponent,
    FinalProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
