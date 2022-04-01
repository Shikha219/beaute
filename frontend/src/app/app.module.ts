import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Components/header-component/header-component.component';
import { PopUpComponent } from './Components/pop-up/pop-up.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ProductsPageComponent } from './Pages/products-page/products-page.component';
import { FinalProductsPageComponent } from './Pages/final-products-page/final-products-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponentComponent } from './Components/banner-component/banner-component.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomePageComponent,
    ProductsPageComponent,
    FinalProductsPageComponent,
    BannerComponentComponent,PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,FormsModule,
    MatCardModule,MatGridListModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
