import { IGeneros } from './generos';

export interface IFilme {
  id: number;
  nome: string;
  ano: number;
  diretor: string;
  generos: IGeneros[];
  atores: string[];
}
