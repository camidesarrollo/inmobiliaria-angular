import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Contacto } from 'src/app/Model/contacto';
import {ContactoService} from '../../../Servicios/contacto.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public contactoService: ContactoService) { }

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
