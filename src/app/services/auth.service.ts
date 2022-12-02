import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged:any=false;
  constructor(public afAuth:AngularFireAuth,public afsAuth:AngularFireAuth) { 
    afAuth.authState.subscribe(user =>(this.isLogged=user));
  }
  //register
  async onRegister(user:User){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      )
    }catch(e){
      console.log("error al registrar "+ e)
    }
  }
  async onLogin(user:User){
    try{
      return await this.afAuth.signInWithEmailAndPassword(
        user.email,
        user.password
      )
    }catch(e){
      console.log("error al ingresar "+ e)
    }
  }
}
