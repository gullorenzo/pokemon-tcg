import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackModalComponent } from './attack-modal.component';

describe('AttackModalComponent', () => {
  let component: AttackModalComponent;
  let fixture: ComponentFixture<AttackModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
