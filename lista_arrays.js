// 1. Encontrar o maior elemento de um vetor
let alturas = [160, 172, 158, 180, 165];
let maior = alturas[0];

for (let i = 1; i < alturas.length; i++) {
    if (alturas[i] > maior) {
        maior = alturas[i];
    }
}

console.log("Maior altura:", maior);



// 2. Calcular a soma total dos elementos de um vetor
let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
let Soma = 0;

for (let i = 0; i < notas.length; i++) {
    Soma += notas[i];
}

console.log("Soma das notas:", Soma);



// 3. Calcular a média dos elementos de um vetor
let tempos = [12, 15, 10, 14, 13];
let soma = 0;

for (let i = 0; i < tempos.length; i++) {
    soma += tempos[i];
}

let media = soma / tempos.length;
console.log("Média dos tempos:", media);



// 4. Inverter os elementos de um vetor
let dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];
let reverso = [];

for (let i = dias.length - 1; i >= 0; i--) {
    reverso.push(dias[i]);
}

console.log("Dias reverso:", reverso);



// 5. Contar quantos elementos são pares
let numeros = [12, 33, 44, 55, 66, 77, 88, 99, 100, 21];
let countPares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        countPares++;
    }
}

console.log("Números pares:", countPares);



// 6. Multiplicar todos os elementos por um fator constante
let precos = [10, 20, 30, 40, 50];
let novosPrecos = [];

for (let i = 0; i < precos.length; i++) {
    novosPrecos.push(precos[i] * 1.1);
}

console.log("Novos preços:", novosPrecos);



// 7. Remover elementos duplicados de um vetor
let frutas = ["maçã", "banana", "maçã", "laranja", "banana"];
let unicas = [];

for (let i = 0; i < frutas.length; i++) {
    let duplicado = false;
    for (let j = 0; j < unicas.length; j++) {
        if (frutas[i] === unicas[j]) {
            duplicado = true;
            break;
        }
    }
    if (!duplicado) {
        unicas.push(frutas[i]);
    }
}

console.log("Frutas únicas:", unicas);



// 8. Verificar se um elemento existe no vetor
let cidades = ["São Paulo", "Curitiba", "Florianópolis", "Recife"];
let encontrada = false;

for (let i = 0; i < cidades.length; i++) {
    if (cidades[i] === "Florianópolis") {
        encontrada = true;
        break;
    }
}

console.log("Florianópolis encontrada?", encontrada);



// 9. Contar quantas vezes um elemento aparece
let respostas = [1, 2, 3, 4, 5, 3, 2, 1, 5, 4];
let contador = [0, 0, 0, 0, 0];

for (let i = 0; i < respostas.length; i++) {
    let nota = respostas[i];
    contador[nota - 1]++;
}

for (let i = 0; i < contador.length; i++) {
    console.log(`Nota ${i + 1}: ${contador[i]} vezes`);
}



// 10. Criar um vetor com os quadrados dos números
let Numeros = [2, 4, 6, 8, 10];
let quadrados = [];

for (let i = 0; i < Numeros.length; i++) {
    quadrados.push(Numeros[i] * Numeros[i]);
}

console.log("Quadrados:", quadrados);


// 11. Vetor de Maior Módulo em 2D
function encontrarMaximalMagnitude(vectors2D) {
    if (vectors2D.length === 0) {
        throw new Error("Array vazio");
    }

    let maiorMagnitude = -Infinity;
    let vetorMaior = null;

    for (let i = 0; i < vectors2D.length; i++) {
        let v = vectors2D[i];
        if (typeof v.x !== "number" || typeof v.y !== "number") {
            throw new Error("Elemento inválido");
        }
        let magnitude = Math.sqrt(v.x * v.x + v.y * v.y);
        if (magnitude > maiorMagnitude) {
            maiorMagnitude = magnitude;
            vetorMaior = v;
        }
    }

    return vetorMaior;
}

// Exemplo de uso:
let vetores = [
    { x: 3, y: 4 },
    { x: 1, y: 1 },
    { x: 5, y: 12 }
];
console.log(encontrarMaximalMagnitude(vetores));