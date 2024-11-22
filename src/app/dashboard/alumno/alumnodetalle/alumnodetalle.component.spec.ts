import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnodetalleComponent } from './alumnodetalle.component';

describe('AlumnodetalleComponent', () => {
  let component: AlumnodetalleComponent;
  let fixture: ComponentFixture<AlumnodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnodetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
