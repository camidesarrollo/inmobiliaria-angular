import { Component, OnInit } from '@angular/core';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [MobileNavComponent, NavComponent]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
