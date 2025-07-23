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

class CarroEletrico extends Carro {
  autonomiaBateria: number;

  constructor(marca: string, modelo: string, ano: number, autonomiaBateria: number) {
    super(marca, modelo, ano);
    this.autonomiaBateria = autonomiaBateria;
  }

  obterDetalhes(): string {
    return `${super.obterDetalhes()}, Autonomia da Bateria: ${this.autonomiaBateria} km`;
  }
}

const tesla = new CarroEletrico("Tesla", "Model S", 2024, 600);
console.log(tesla.obterDetalhes());
