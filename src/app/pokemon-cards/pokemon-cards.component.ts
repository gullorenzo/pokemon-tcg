import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Card, PokemonCard } from '../class/pokemon';


@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnInit {

  public pokemonCards: PokemonCard

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonCard()
  }

  public getPokemonCard() {
    this.pokemonService.getPokemonCard().subscribe(cards => {
      if (!!cards) {
        this.pokemonCards = cards
      }
    })
  }

}
