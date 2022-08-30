import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvExamenComponent } from './pv-examen.component';

describe('PvExamenComponent', () => {
  let component: PvExamenComponent;
  let fixture: ComponentFixture<PvExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
