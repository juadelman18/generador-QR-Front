import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../servicio/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMensaje: string = null;
  qrFlag: boolean = false;
  userObject = {
    usuario: "", passw: "", authcode: ""
  };

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._loginService.loginAuth(this.userObject).subscribe((data) => {
      this.errorMensaje = null;
      if (data.body['status'] === 200) {
        this._loginService.updateAuthStatus(true);
        this._router.navigateByUrl('/home');
      }
      if (data.body['status'] === 206) {
        this.qrFlag = true;
      }
      if (data.body['status'] === 403) {
        this.errorMensaje = data.body['mensaje'];
      }
      if (data.body['status'] === 404) {
        this.errorMensaje = data.body['mensaje'];
      }
    });
  }

}
