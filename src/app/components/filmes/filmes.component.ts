import { Component, Input } from '@angular/core';
import { Generos } from '../../models/generos';
import { CommonModule } from '@angular/common';
import { Filmes } from '../../models/filmes';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css',
})
export class FilmesComponent {
  @Input({
    required: true,
  })
  public generos!: Generos;
  public filmes!: Filmes;
}
