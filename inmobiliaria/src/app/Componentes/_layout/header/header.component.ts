import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [NavComponent]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
