import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursodetalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursodetalle.component.html',
  styleUrl: './cursodetalle.component.css',
})
export class CursodetalleComponent {
  nombre: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }
}
