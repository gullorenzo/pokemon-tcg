import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-attack-modal',
  templateUrl: './attack-modal.component.html',
  styleUrls: ['./attack-modal.component.scss']
})
export class AttackModalComponent implements OnInit {

  public data;
  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
