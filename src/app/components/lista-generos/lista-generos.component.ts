import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GeneroService } from '../../services/genero.service';

@Component({
  selector: 'app-lista-generos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-generos.component.html',
  styleUrl: './lista-generos.component.css',
})
export class ListaGenerosComponent {
  public generoService = inject(GeneroService);
}
