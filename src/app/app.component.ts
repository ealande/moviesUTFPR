import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaGenerosComponent } from './components/lista-generos/lista-generos.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { GeneroService } from './services/genero.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListaGenerosComponent, FilmesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'moviesTaskUtfpr';
  public generoService = inject(GeneroService);
}
