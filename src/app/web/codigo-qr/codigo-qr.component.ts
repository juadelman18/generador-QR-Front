import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {totp} from 'totp-generator';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.component.html',
  styleUrls: ['./codigo-qr.component.css']
})
export class CodigoQRComponent implements OnInit {

  qrcodename: string;
  title = 'generate-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  display = false;
  href: string;
  showQRCode: boolean;

  linkCodeQr1 = 'https://www.npmjs.com/package/ngx-qrcode2';
  linkCodeQr2 = 'https://www.npmjs.com/~techiediaries';
  linkCodeQr3 = 'https://www.letsboot.com/';

  token: string;

  constructor(private renderer: Renderer2) {
    this.showQRCode = false;
    this.token = totp('JBSWY3DPEHPK3PXP');
    console.log(this.token);
  }

  ngOnInit() {
  }
  generateQRCode() {
    if (this.qrcodename === '') {
      this.display = false;
      alert ('Introduzca una palabra a generar');
      return;
    } else {
      this.value = this.qrcodename;
      this.display = true;
    }
  }
  downloadImage() {
    this.href = document.getElementsByTagName('img')[0].src;
  }


}
