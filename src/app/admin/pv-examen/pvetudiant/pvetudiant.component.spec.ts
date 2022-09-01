import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvetudiantComponent } from './pvetudiant.component';

describe('PvetudiantComponent', () => {
  let component: PvetudiantComponent;
  let fixture: ComponentFixture<PvetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
