import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totp: any = false;
  authcode: string = "";
  errorMensaje: string = null;

  constructor(private _loginService: LoginService) {
    this.getAuthDetalle();
  }

  ngOnInit() {
  }

  getAuthDetalle() {
   this._loginService.getAuth().subscribe((data) => {
      const result = data.body;
      if (data.status === 200) {
        console.log(result);
        if (result == null) {
          this.setup();
        } else {
          this.totp = result;
        }
      }
   });
  }

  setup() {
    this._loginService.setupAuth().subscribe((data) => {
      const result = data.body;
      if (data.status === 200) {
        console.log(result);
        this.totp = result;
      }
    });
  }

  confirmacion() {
    this._loginService.verifyAuth(this.authcode).subscribe((data) => {
      const result = data.body;
      if (data.status === 200) {
        console.log(result);
        this.errorMensaje = null;
        this.totp.secreto = this.totp.tempSecreto;
        this.totp.tempSecreto = "";
      } else {
        this.errorMensaje = result['message'];
      }
    });
  }

  disahabilitadoTotp() {
    this._loginService.deleteAuth().subscribe((data) => {
      const result = data.body;
      if (data.status === 200) {
        console.log(result);
        this.authcode = "";
        this.getAuthDetalle();
      }
    });
  }


}
