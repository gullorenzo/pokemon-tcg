import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { ICard } from '../class/pokemon';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AttackModalComponent } from '../attack-modal/attack-modal.component';

@Component({
  selector: 'app-podemon-datails',
  templateUrl: './podemon-datails.component.html',
  styleUrls: ['./podemon-datails.component.scss']
})
export class PodemonDatailsComponent implements OnInit {
  public pokemonData: ICard;
  public modalRef: BsModalRef;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.getPokemonDetail(param.id);
    })
  }

  public getPokemonDetail(pokemonId) {
    this.pokemonService.getPokemonDetail(pokemonId).subscribe(data => {
      if (!!data) {
        this.pokemonData = data;
      }
    }, err =>{
      console.log(err);
    })
  }

  openModal(attack) {
    this.modalRef = this.modalService.show(AttackModalComponent,  {
      initialState: {
        title: 'Modal title',
        data: {
          attack
        }
      }
    });
  }

}
