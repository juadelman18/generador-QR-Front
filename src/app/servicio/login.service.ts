import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headerOptions: any = null;

  _isLoggedIn: boolean = false;

  authSub = new Subject<any>();

  constructor(private _http: HttpClient) {
  }

  loginAuth(userObj: any) {
    if (userObj.authcode) {
      console.log('datos de request');
      this.headerOptions = new HttpHeaders({
        'x-totp': userObj.authcode
      });
    }
    return this._http.post("http://localhost:3000/login", { usuario: userObj.usuario, passw: userObj.passw }, { observe: 'response', headers: this.headerOptions });
  }

  setupAuth() {
    return this._http.post("http://localhost:3000/totp/setup", {}, { observe: 'response' });
  }

  registerUser(userObj: any) {
    return this._http.post("http://localhost:3000/registro", { usuario: userObj.usuario, passw: userObj.passw }, { observe: "response" });
  }

  updateAuthStatus(value: boolean) {
    this._isLoggedIn = value;
    this.authSub.next(this._isLoggedIn);
    localStorage.setItem('isLoggedIn', value ? "true" : "false");
  }

  getAuthStatus() {
    this._isLoggedIn = localStorage.getItem('isLoggedIn') === "true" ? true : false;
    return this._isLoggedIn;
  }

  logoutUser() {
    this._isLoggedIn = false;
    this.authSub.next(this._isLoggedIn);
    localStorage.setItem('isLoggedIn', "false");
  }

  getAuth() {
    return this._http.get("http://localhost:3000/totp/setup", { observe: 'response' });
  }

  deleteAuth() {
    return this._http.delete("http://localhost:3000/totp/setup", { observe: 'response' });
  }

  validarAuth(token: any) {
    return this._http.post("http://localhost:3000/totp/validar", { token }, { observe: 'response' });
  }

}
