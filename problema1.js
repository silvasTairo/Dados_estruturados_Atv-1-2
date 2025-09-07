// PROBLEMA 1
// Com base em uma lista de cinco estudantes, cada um identificado pelo número de matrícula e pela nota obtida, imprima os números de matrícula dos alunos cuja nota seja superior à média da turma.

const estudantes = [
    { matricula: 1001, nota: 7.5 },
    { matricula: 1002, nota: 6.8 },
    { matricula: 1003, nota: 8.2 },
    { matricula: 1004, nota: 5.4 },
    { matricula: 1005, nota: 9.1 }
];

let somaNotas = 0;
for (let i = 0; i < estudantes.length; i++) {
    somaNotas += estudantes[i].nota;
}

const media = somaNotas / estudantes.length;

const matriculasAcimaMedia = [];
for (let i = 0; i < estudantes.length; i++) {
    if (estudantes[i].nota > media) {
        matriculasAcimaMedia.push(estudantes[i].matricula);
    }
}

console.log("Matrículas dos alunos com nota acima da média:");
for (let i = 0; i < matriculasAcimaMedia.length; i++) {
    console.log(matriculasAcimaMedia[i]);
}
