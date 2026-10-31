import { Component, OnInit } from '@angular/core';
import { HeaderInternaComponent } from '@layout/header-interna/header-interna.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layout/footer/footer.component';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.css'],
    imports: [HeaderInternaComponent, RouterOutlet, FooterComponent]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
