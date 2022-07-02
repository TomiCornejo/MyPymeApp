import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.sass']
})
export class InicioScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('sitiomovil');
    if(datos){
      window.location.href="/productos-screen";
    }
  }

}
