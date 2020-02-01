import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicio/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  errorMessage: string = null;

  userObject = {
    uname: '',
    upass: ''
  };

  confirmPass: string;

  // tslint:disable-next-line:variable-name
  constructor(private _loginService: LoginService, private _router: Router) {
    this.confirmPass = '';
   }

  ngOnInit() {
  }

  registerUser() {
    // tslint:disable-next-line:curly
    if (this.userObject.uname.trim() !== '' && this.userObject.upass.trim() !== '' && (this.userObject.upass.trim() === this.confirmPass))
      this._loginService.registerUser(this.userObject).subscribe((data) => {
        const result = data.body;
        // tslint:disable-next-line:no-string-literal
        if (result['status'] === 200) {
          // tslint:disable-next-line:no-string-literal
          this.errorMessage = result['message'];
          setTimeout(() => {
            this._router.navigate(['/login']);
          }, 2000);
        }
      });
  }
}
