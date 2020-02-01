import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../servicio/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tfaFlag: boolean;
  userObject = {
    uname: '',
    upass: '',
    authcode : ''
  };
  errorMessage: string = null;

  constructor(private _loginService: LoginService, private _router: Router) {
    this.tfaFlag = false;
  }

  ngOnInit() {
  }

  loginUser() {
    this._loginService.loginAuth(this.userObject).subscribe((data) => {
      const code = data.body;
      this.errorMessage = null;
      if (code['status'] === 200) {
        this._loginService.updateAuthStatus(true);
        this._router.navigateByUrl('/home');
      }
      if (code['status'] === 206) {
        this.tfaFlag = true;
      }
      if (code['status'] === 403) {
        this.errorMessage = data.body['message'];
      }
      if (code['status'] === 404) {
        this.errorMessage = data.body['message'];
      }
    });
  }

}
