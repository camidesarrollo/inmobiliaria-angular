import { Component, OnInit } from '@angular/core';
import { IndexNosotrosComponent } from '../../components/index-nosotros/index-nosotros.component';
import { IndexAnuncioComponent } from '@features/properties/presentation/components/index-anuncio/index-anuncio.component';
import { IndexContactoComponent } from '@features/contact/presentation/components/index-contacto/index-contacto.component';

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
