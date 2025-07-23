class Carro {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  obterDetalhes(): string {
    return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2022);
console.log(meuCarro.obterDetalhes());
