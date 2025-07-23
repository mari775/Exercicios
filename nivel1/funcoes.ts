function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
  if (imc < 18.5) return "Magreza";
  else if (imc < 25) return "Normal";
  else if (imc < 30) return "Sobrepeso";
  return "Obesidade";
}

const imc = calcularIMC(70, 1.75);
console.log(classificarIMC(imc)); 
