import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { Card, PokemonCard, ICard } from '../class/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }


  public getPokemonCard(): Observable<PokemonCard> {
    return this.http.get<PokemonCard>(
      `${environment.webApi}cards`
    );
  }

  public getByName(params): Observable<PokemonCard> {
    return this.http.get<PokemonCard>(
      `${environment.webApi}cards`, {params}
    );
  }

  public getPokemonDetail(pokemonId): Observable<ICard> {
    return this.http.get<ICard>(
      `${environment.webApi}cards/${pokemonId}`
    );
  }
}
