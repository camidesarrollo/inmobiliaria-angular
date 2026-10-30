import { Component, OnInit } from '@angular/core';
import { IndexNosotrosComponent } from '../index-nosotros/index-nosotros.component';
import { IndexAnuncioComponent } from '../index-anuncio/index-anuncio.component';
import { IndexContactoComponent } from '../index-contacto/index-contacto.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [IndexNosotrosComponent, IndexAnuncioComponent, IndexContactoComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
