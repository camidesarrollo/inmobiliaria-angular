import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Propiedades } from 'src/app/Model/propiedades';
import {PropiedadesService} from '../../../Servicios/propiedades.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css'],
  providers: [PropiedadesService]
})
export class AnuncioComponent implements OnInit {
  selectedPropiedades: Propiedades;
  id: string;
  constructor(private router :ActivatedRoute, public propiedadesService: PropiedadesService) {
    this.id = router.snapshot.params.id;
    this.selectedPropiedades = new Propiedades();
   }
  
  
  ngOnInit(): void {
    this.obtenerPropiedad();
  }
  obtenerPropiedad(){
    const id: string = this.router.snapshot.params.id;
    this.selectedPropiedades._id = id;
    this.propiedadesService.getPropiedad(this.selectedPropiedades).subscribe((res: Propiedades) => {
        this.propiedadesService.selectedPropiedades = res;
        this.propiedadesService.propiedades = [res];
        console.log(this.propiedadesService.propiedades);
    });
  }
  
}

