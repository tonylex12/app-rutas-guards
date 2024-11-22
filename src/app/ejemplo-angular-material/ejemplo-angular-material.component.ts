import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-ejemplo-angular-material',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './ejemplo-angular-material.component.html',
  styleUrl: './ejemplo-angular-material.component.css',
})
export class EjemploAngularMaterialComponent {}
