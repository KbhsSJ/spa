import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

    heroe: any = [];


  constructor(private activatedRoute: ActivatedRoute,
              private _heoresService: HeroesService) {
    this.activatedRoute.params.subscribe( (params: any) => {
      //  console.log(params.id);
       this.heroe= this._heoresService.getHeroe( params.id);
       console.log(this.heroe);
    });
  }



}
