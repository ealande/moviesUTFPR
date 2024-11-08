export class Generos {
  constructor(public genero: string) {}

  public get generos(): string {
    return `${this.genero}`;
  }
}
