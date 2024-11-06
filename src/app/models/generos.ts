export class Generos {
  constructor(
    public readonly id: number,
    public genero: string[],
  ) {}

  public get generos(): string {
    return `${this.genero}`;
  }
}
