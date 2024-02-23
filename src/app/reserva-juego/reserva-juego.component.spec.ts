import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaJuegoComponent } from './reserva-juego.component';

describe('ReservaJuegoComponent', () => {
  let component: ReservaJuegoComponent;
  let fixture: ComponentFixture<ReservaJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservaJuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
