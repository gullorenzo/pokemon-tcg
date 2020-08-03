import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { PokemonCard } from '../class/pokemon';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  public pokemonCards: PokemonCard

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemonCard()
  }

  public getPokemonCard() {
    this.pokemonService.getPokemonCard().subscribe(cards => {
      if (!!cards) {
        this.pokemonCards = cards
      }
    }, err =>{
      console.log(err);
    })
  }

  public getByName() {
    if (this.form.invalid) {
      this.form.controls.name.markAsTouched()
      return;
    }
    this.pokemonService.getByName(this.form.value).subscribe(cards => {
      if (!!cards) {
        this.pokemonCards = cards
      }
    }, err =>{
      console.log(err);
    })
  }

  getPokemonDetail(pokemonId){
    this.router.navigateByUrl(`cards/${pokemonId}`)
  }

}
