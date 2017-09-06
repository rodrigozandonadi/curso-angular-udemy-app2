import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.models';
import { OfertasService } from '../ofertas.service';

import { ComoUsarComponent } from './como-usar/como-usar.component';
import { OndeFicaComponent } from './onde-fica/onde-fica.component';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => {
        this.oferta = oferta;
      });
  }

}
