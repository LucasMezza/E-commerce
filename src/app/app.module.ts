import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderBannerComponent } from './components/index/principal/header-banner/header-banner.component';
import { CatalogoComponent } from './components/index/principal/catalogo/catalogo.component';
import { FooterBannerComponent } from './components/index/principal/footer-banner/footer-banner.component';
import { ProductComponent } from './components/index/product/product.component';
import { CartComponent } from './components/index/cart/cart.component';
import { CartCardComponent } from './components/index/cart/cart-card/cart-card.component';
import { UpdateComponent } from './components/index/product/update/update.component';
import { AddComponent } from './components/index/product/add/add.component';
import { DeleteComponent } from './components/index/product/delete/delete.component';
import { LoginComponent } from './components/index/login/login.component';
import { PageNotFoundComponent } from './components/index/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/index/register/register.component';
import { PrincipalComponent } from './components/index/principal/principal.component';
import { UsersComponent } from './components/index/users/users.component';
import { ProductDetailComponent } from './components/index/product-detail/product-detail.component';
import { ListUsersComponent } from './components/index/list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IndexComponent,
    HeaderBannerComponent,
    CatalogoComponent,
    FooterBannerComponent,
    ProductComponent,
    CartComponent,
    CartCardComponent,
    UpdateComponent,
    AddComponent,
    DeleteComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    PrincipalComponent,
    UsersComponent,
    ProductDetailComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
