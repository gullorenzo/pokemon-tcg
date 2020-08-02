import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { Card, PokemonCard } from '../class/pokemon';

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
}
