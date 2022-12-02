import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { ToastController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:User= new User();
  constructor(private router:Router, private authSvc:AuthService,private toastController: ToastController, private authService:AuthService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async onLogin(){
    const user= await this.authSvc.onLogin(this.user);
    if(user){
      console.log('ingreso correctamente');
      this.router.navigateByUrl('/home');
    }else{
      const alert = await this.alertController.create({
        header: 'Atencion',
        subHeader: 'Revise sus credenciales',
        message: 'Su usuaro o contraseña no coinciden con nuestros registros',
        buttons: [
          {
            text: 'Salir',
          }
        ]
      });
      await alert.present();
    }
  }
}
