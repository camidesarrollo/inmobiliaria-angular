import { Component, OnInit } from '@angular/core';
import { IndexNosotrosComponent } from '../../PagesExternas/index-nosotros/index-nosotros.component';

@Component({
    selector: 'app-nosotros',
    templateUrl: './nosotros.component.html',
    styleUrls: ['./nosotros.component.css'],
    imports: [IndexNosotrosComponent]
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
