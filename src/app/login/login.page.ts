import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: String;
  password: String;


  constructor(private router: Router, public toast: ToastController) { }

  ngOnInit() {

    
  }

  login(){

    if(this.user == "master" && this.password == "master"){
      this.router.navigate(['/home'])    
    }
    else{
      this.presentToast("Datos incorrectos!.", 3000)
    }

  }

    
  async presentToast(mensaje:string, tiempo:number) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: tiempo
    });
    toast.present();
  }


}
