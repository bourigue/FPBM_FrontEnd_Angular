import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutprofesseurComponent } from './toutprofesseur.component';

describe('ToutprofesseurComponent', () => {
  let component: ToutprofesseurComponent;
  let fixture: ComponentFixture<ToutprofesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutprofesseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToutprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
