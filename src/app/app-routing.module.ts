// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
