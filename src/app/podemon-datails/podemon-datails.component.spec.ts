import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodemonDatailsComponent } from './podemon-datails.component';

describe('PodemonDatailsComponent', () => {
  let component: PodemonDatailsComponent;
  let fixture: ComponentFixture<PodemonDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodemonDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodemonDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
