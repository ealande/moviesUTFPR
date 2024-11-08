import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, ReplaySubject, tap } from 'rxjs';
import { IGeneros } from '../interfaces/generos';
import { Generos } from '../models/generos';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  private httpClient = inject(HttpClient);

  private _generos$ = new ReplaySubject<Generos[]>(1);
  public generos$ = this._generos$.asObservable();

  private _generoSelecionado$ = new ReplaySubject<Generos>(1);
  public generoSelecionado$ = this._generoSelecionado$.asObservable();

  constructor() {
    this.httpClient
      .get<IGeneros[]>('http://localhost:3000/api/generos')
      .pipe(tap(console.log))
      .pipe(
        map((generosData) => generosData.map((g: string) => new Generos(g))),
      )
      .subscribe(this._generos$);
  }

  public selecionaGenero(g: Generos): void {
    this._generoSelecionado$.next(g);
  }
}
