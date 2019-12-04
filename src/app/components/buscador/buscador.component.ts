import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeservice: HeroesService,
    private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.termino);
      this.termino = params.termino;
      this.heroes = this.heroeservice.buscarHeroes(params.termino);
      console.log(this.heroes);
    });
  }
  verHeroe(idx: number) {
    this.router.navigate(['/heroe/', idx]);
  }

}
