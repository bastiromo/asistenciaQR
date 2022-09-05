import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  password: string;
  nombre: string;


  constructor(
    private router: Router,
    public toast: ToastController,
    private loadingCtrl: LoadingController,
    private anim: AnimationController
  ) { }

  ngOnInit() {


  }

  login() {
    

    if (this.user == "master" && this.password == "master") {
      this.showLoading();
      this.router.navigate(['/home'])
      
    }
    else {

      this.presentToast("Datos incorrectos!.", 3000)
    }

  }

  // errorInput() {
  //   if (this.user == '' || this.user == null) {

  //     this.anim.create()
  //       .addElement(document.querySelector(".input"))
  //       .duration(100)
  //       .iterations(3)
  //       .keyframes([
  //         { offset: .5, transform: "translateX(-5px)" },
  //         { offset: .7, transform: "translateX(5px)" },
  //         { offset: 1, transform: "translateX(0px)" }

  //       ])
  //       .fromTo("border", "2px #636363 solid", "2px #ff0000 solid")

  //       .play()
  //   }
  // }

  async presentToast(mensaje: string, tiempo: number) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: tiempo
    });
    toast.present();
  }

  


  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 2000,
      spinner: 'circles',
    });

    loading.present();
  }
}


