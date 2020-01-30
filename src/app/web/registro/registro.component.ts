import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicio/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  errorMensaje: string = null;
  userObject = {
    usuario: '',
    passw: ''
  };

  confirmaPassw: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.confirmaPassw = '';
   }

  ngOnInit() {
  }

  registroUsuario() {
    if (this.userObject.usuario.trim() !== '' && this.userObject.passw.trim() !== ''
    && (this.userObject.usuario.trim() === this.userObject.passw.trim())) {
      this.loginService.registerUser(this.userObject).subscribe((data) => {
        const result = data.body;
        if (result['status']  === 200) {
          this.errorMensaje = result['message'];
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 200);
        }
    });
   }
 }
}
