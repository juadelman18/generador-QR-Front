import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './web/login/login.component';
import { AuthoGuardGuard } from './totp/autho-guard.guard';
import { HomeComponent } from './web/home/home.component';
import { RegistroComponent } from './web/registro/registro.component';
import { LoginGuard } from './totp/login.guard';


const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full', canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthoGuardGuard] },
  { path: "register", component: RegistroComponent, canActivate: [LoginGuard] },
  { path: "**", redirectTo: '/login', pathMatch: 'full', canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
