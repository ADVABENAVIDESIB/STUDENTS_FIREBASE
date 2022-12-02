import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();
  constructor(private authSvc: AuthService, private router:Router,private toastController: ToastController) { }

  ngOnInit() {
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'USUARIO GUARDADO CORRECTAMENTE!',
      duration: 2000,
      position,
      color:'success'
    });

    await toast.present();
  }
  async onRegister(){
    const user =await this.authSvc.onRegister(this.user);
    if(user){
      this.presentToast("top")
      console.log("Se creo con exito el usuario");
      this.router.navigateByUrl('/home');
    }
  }
}
