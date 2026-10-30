import { Component, OnInit, inject } from '@angular/core';
import { NgForm, FormsModule } from "@angular/forms";
import { Contacto } from '../../../Model/contacto';
import {ContactoService} from '../../../Servicios/contacto.service';
@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css'],
    imports: [FormsModule]
})
export class ContactoComponent implements OnInit {
  contactoService = inject(ContactoService);


  ngOnInit(): void {
  }
  addContacto(form?:  NgForm){
    console.log("ok");
    console.log(form.value);
    this.contactoService.postPropiedad(form.value).subscribe((res)=>{
      this.resetForm(form);
    });
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contactoService.selectedContacto = new Contacto();
    }
  }
}
