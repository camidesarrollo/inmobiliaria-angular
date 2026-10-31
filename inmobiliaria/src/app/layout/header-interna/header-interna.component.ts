import { Component, OnInit } from '@angular/core';
import { NavComponent } from '@layout/nav/nav.component';

@Component({
    selector: 'app-header-interna',
    templateUrl: './header-interna.component.html',
    styleUrls: ['./header-interna.component.css'],
    imports: [NavComponent]
})
export class HeaderInternaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
