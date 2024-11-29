import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursolista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cursolista.component.html',
  styleUrl: './cursolista.component.css',
})
export class CursolistaComponent {
  cursos = [
    { id: 1, nombre: 'Angular' },
    { id: 2, nombre: 'React' },
    { id: 3, nombre: 'Vue' },
    { id: 4, nombre: 'Node' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  goDetalleCurso(nombre: string) {
    this.router.navigate([nombre], { relativeTo: this.route });
  }
}
