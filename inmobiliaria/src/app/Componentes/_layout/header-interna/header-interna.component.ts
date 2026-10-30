import { Component, OnInit } from '@angular/core';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'app-header-interna',
    templateUrl: './header-interna.component.html',
    styleUrls: ['./header-interna.component.css'],
    imports: [MobileNavComponent, NavComponent]
})
export class HeaderInternaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
