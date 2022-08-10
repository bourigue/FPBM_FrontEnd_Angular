import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllEtudiantComponent } from './alll-etudiant.component';

describe('AlllEtudiantComponent', () => {
  let component: AlllEtudiantComponent;
  let fixture: ComponentFixture<AlllEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlllEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlllEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
