import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { NgxQRCodeModule } from 'ngx-qrcode3';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CodigoQRComponent } from './web/codigo-qr/codigo-qr.component';
import { HeaderComponent } from './web/header/header.component';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';
import { RegistroComponent } from './web/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './servicio/login.service';

@NgModule({
  declarations: [
    AppComponent,
    CodigoQRComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxQRCodeModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
