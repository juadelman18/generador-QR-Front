import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { LoginService } from './../../servicio/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  _isLoggedIn: boolean = false;

  constructor(private router: Router, private _loginService: LoginService) {
    this._loginService.authSub.subscribe((data) => {
      this._isLoggedIn = data;
    });
  }

  ngOnInit() {
    this._isLoggedIn = this._loginService.getAuthStatus();
  }

  menuBar() {
    if (document.getElementById('collapsibleNavId').style.display === 'block') {
       document.getElementById('collapsibleNavId').style.display = 'none';
    } else {
      document.getElementById('collapsibleNavId').style.display = 'block';
    }
  }

  logout() {
    this._loginService.logoutUser();
    this.router.navigate(['/login']);
  }



}
