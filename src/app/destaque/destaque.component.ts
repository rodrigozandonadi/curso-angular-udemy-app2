import { Component, OnInit } from '@angular/core';
import {OfertasService } from '../ofertas.service';
import {Oferta } from '../shared/oferta.models';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css'],
  providers: [OfertasService]
})
export class DestaqueComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {

    this.ofertasService.getOfertasDestaque()
      .then(( ofertas: Oferta[] ) => {
        this.ofertas = ofertas;
      })
      .catch((param: any) => {
        console.log(param);
      });

  }

}
