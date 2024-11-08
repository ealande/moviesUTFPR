import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ReplaySubject, map, tap } from 'rxjs';
import { Filmes } from '../models/filmes';
import { Generos } from '../models/generos';
import { IFilme } from '../interfaces/filme';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private httpClient = inject(HttpClient);

  private _filmes$ = new ReplaySubject<Filmes[]>(1);
  public filmes$ = this._filmes$.asObservable();

  constructor() {
    this.httpClient
      .get<IFilme[]>('http://localhost:3000/api/filmes/generos/:genero')
      .pipe(tap(console.log))
      .pipe(
        map((filmesData) =>
          filmesData.map(
            (f: Filmes) =>
              new Filmes(
                new Generos(f.genero[]),
                f.id,
                f.nome,
                f.ano,
                f.atores,
                f.diretor,
              ),
          ),
        ),
      )
      .subscribe(this._filmes$);
  }
}
