function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`; 
}

const pessoa1 = {
    nome: 'Bryan',
    idade: 8,
};

const pessoa2 = {
    nome: 'Fernanda',
    idade: 32,
};

const pessoa3 = {
    nome: 'Leonardo',
    idade: 36,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));
console.log(calculaIdade.apply(pessoa1, [24]));

