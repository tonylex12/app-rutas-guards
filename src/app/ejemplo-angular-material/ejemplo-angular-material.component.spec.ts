import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAngularMaterialComponent } from './ejemplo-angular-material.component';

describe('EjemploAngularMaterialComponent', () => {
  let component: EjemploAngularMaterialComponent;
  let fixture: ComponentFixture<EjemploAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploAngularMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
