import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterBannerComponent } from './components/footer-banner/footer-banner.component';
import { ProductComponent } from './components/product/product.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { UpdateComponent } from './components/update/update.component';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/index/principal/principal.component';
import { AudComponent } from './components/index/aud/aud.component';
import { UsersComponent } from './components/index/users/users.component';
import { BuyProductComponent } from './components/index/buy-product/buy-product.component';
import { ProductDetailComponent } from './components/index/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IndexComponent,
    HeaderBannerComponent,
    CatalogoComponent,
    ProductCardComponent,
    FooterBannerComponent,
    ProductComponent,
    CardComponent,
    CartComponent,
    CartCardComponent,
    UpdateComponent,
    AddComponent,
    DeleteComponent,
    ListComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    PrincipalComponent,
    AudComponent,
    UsersComponent,
    BuyProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
