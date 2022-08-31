import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

texto = "Hello World"
nombre: string;



  constructor(private anim: AnimationController
    ) {}

    errorInput() {
      if (this.nombre == '' || this.nombre == null) {
  
        this.anim.create()
          .addElement(document.querySelector(".input"))
          .duration(100)
          .iterations(3)
          .keyframes([
            { offset: .5, transform: "translateX(-5px)" },
            { offset: .7, transform: "translateX(5px)" },
            { offset: 1, transform: "translateX(0px)" }
  
          ])
          .fromTo("border", "2px #636363 solid", "2px #ff0000 solid")
  
          .play()
      }
    }

    ngOnInit(): void {
      this.anim.create()
        .addElement(document.querySelector("img"))
        .duration(1800)
        .delay(500)
        .keyframes([
          { offset: 1, transform: "scale(2.5)" },
          { offset: 1, opacity: "0" },
  
        ])
        .play()
    }
}

export class ExampleComponent {
  // Typically referenced to your ion-router-outlet
  presentingElement = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
}