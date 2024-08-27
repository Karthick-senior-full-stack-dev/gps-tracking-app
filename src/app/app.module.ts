import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Toast position
      timeOut: 3000, // Duration in milliseconds
      progressBar: true, // Optional: Show a progress bar
      closeButton: true, // Optional: Show a close button
      progressAnimation: 'increasing' // Optional: Progress animation
    }),
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
