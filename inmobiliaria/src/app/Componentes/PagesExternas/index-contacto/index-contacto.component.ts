import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IndexBlogComponent } from '../index-blog/index-blog.component';
import { IndexTestimonialesComponent } from '../index-testimoniales/index-testimoniales.component';

@Component({
    selector: 'app-index-contacto',
    templateUrl: './index-contacto.component.html',
    styleUrls: ['./index-contacto.component.css'],
    imports: [RouterLink, IndexBlogComponent, IndexTestimonialesComponent]
})
export class IndexContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
