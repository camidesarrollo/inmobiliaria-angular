import { Component, OnInit } from '@angular/core';
import { HeaderInternaComponent } from '../header-interna/header-interna.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.css'],
    imports: [HeaderInternaComponent, RouterOutlet, FooterComponent]
})
export class AppLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
