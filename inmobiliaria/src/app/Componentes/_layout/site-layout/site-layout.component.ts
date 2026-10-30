import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-site-layout',
    templateUrl: './site-layout.component.html',
    styleUrls: ['./site-layout.component.css'],
    imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class SiteLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
