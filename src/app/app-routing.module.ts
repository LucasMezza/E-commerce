import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/index/cart/cart.component';
import { IndexComponent } from './components/index/index.component';
import { ListUsersComponent } from './components/index/list-users/list-users.component';
import { LoginComponent } from './components/index/login/login.component';
import { PageNotFoundComponent } from './components/index/page-not-found/page-not-found.component';
import { PrincipalComponent } from './components/index/principal/principal.component';
import { ProductDetailComponent } from './components/index/product-detail/product-detail.component';
import { AddComponent } from './components/index/product/add/add.component';
import { DeleteComponent } from './components/index/product/delete/delete.component';
import { ProductComponent } from './components/index/product/product.component';
import { UpdateComponent } from './components/index/product/update/update.component';
import { RegisterComponent } from './components/index/register/register.component';
import { UsersComponent } from './components/index/users/users.component';
import { AuthGuard } from './guard/auth.guard';
import { UserGuardService } from './guard/user-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'ecommerce', pathMatch: 'full' },
  { path: 'ecommerce', component: IndexComponent, children: [
    { path: 'principal', component: PrincipalComponent },
    { path: 'detalle-de-producto', component: ProductDetailComponent },
    { path: 'producto', component: ProductComponent, canActivate : [UserGuardService], data : {expectedRol:['admin']}, children: [
      { path: 'agregar', component: AddComponent},
      { path: 'eliminar/:id', component: DeleteComponent},
      { path: 'actualizar/:id', component: UpdateComponent}
    ] },
    { path: 'listar-usuarios', component: ListUsersComponent, canActivate : [UserGuardService], data : {expectedRol:['admin']} },
    { path: 'usuario', component: UsersComponent, canActivate : [AuthGuard]},
    { path: 'carrito', component: CartComponent, canActivate : [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PageNotFoundComponent },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
