// PROBLEMA 2
//Desenvolva um programa que solicite ao usuário as notas dos alunos de uma turma. Em seguida, atribua a cada nota o conceito correspondente conforme a tabela abaixo: Por fim, deverá ser fornecido o percentual de notas da turma para cada conceito.

const tabelaConceitos = [
    { min: 9.0, max: 10.0, conceito: "A" },
    { min: 8.0, max: 8.9, conceito: "B" },
    { min: 7.0, max: 7.9, conceito: "C" },
    { min: 6.0, max: 6.9, conceito: "D" },
    { min: 0.0, max: 5.9, conceito: "F" }
];

const notas = [];
let continuar = true;

while (continuar) {
    const entrada = prompt("Digite uma nota (ou 'sair' para encerrar):");
    
    if (entrada.toLowerCase() === 'sair') {
        continuar = false;
    } else {
        const nota = parseFloat(entrada);
        if (!isNaN(nota) {
            notas.push(nota);
        } else {
            alert("Por favor, digite um número válido.");
        }
    }
}

const contagemConceitos = { A: 0, B: 0, C: 0, D: 0, F: 0 };
const conceitosAlunos = [];

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    let conceitoAtribuido = '';
    
    for (let j = 0; j < tabelaConceitos.length; j++) {
        const faixa = tabelaConceitos[j];
        if (nota >= faixa.min && nota <= faixa.max) {
            conceitoAtribuido = faixa.conceito;
            contagemConceitos[faixa.conceito]++;
            break;
        }
    }
    
    conceitosAlunos.push({ nota, conceito: conceitoAtribuido });
}

const totalAlunos = notas.length;
const percentuais = {};

for (const conceito in contagemConceitos) {
    percentuais[conceito] = (contagemConceitos[conceito] / totalAlunos) * 100;
}

console.log("\nNotas e conceitos dos alunos:");
for (let i = 0; i < conceitosAlunos.length; i++) {
    console.log(`Nota: ${conceitosAlunos[i].nota.toFixed(1)} - Conceito: ${conceitosAlunos[i].conceito}`);
}

console.log("\nPercentual por conceito:");
for (const conceito in percentuais) {
    console.log(`${conceito}: ${percentuais[conceito].toFixed(1)}%`);
}
