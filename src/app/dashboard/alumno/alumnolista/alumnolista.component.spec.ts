import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnolistaComponent } from './alumnolista.component';

describe('AlumnolistaComponent', () => {
  let component: AlumnolistaComponent;
  let fixture: ComponentFixture<AlumnolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnolistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
