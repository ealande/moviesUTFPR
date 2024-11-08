import { Generos } from './generos';

export class Filmes {
  constructor(
    public id: number,
    public nome: string,
    public ano: number,
    public diretor: string,
    public genero: Generos[],
    public atores: string,
  ) {}
}
