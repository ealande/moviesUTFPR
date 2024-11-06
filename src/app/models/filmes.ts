import { Generos } from './generos';

export class Filmes {
  constructor(
    public name: string,
    public ano: number,
    public diretor: string,
    public genero: Generos,
    public atores: string,
  ) {}
}
