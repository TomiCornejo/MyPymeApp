import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse-screen',
  templateUrl: './registrarse-screen.component.html',
  styleUrls: ['./registrarse-screen.component.sass']
})
export class RegistrarseScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('sitiomovil');
    if(datos){
      window.location.href="/productos-screen";
    }
  }

}
