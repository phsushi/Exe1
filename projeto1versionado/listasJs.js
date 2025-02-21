//Declaração de uma array e instânciamento de elementos 

const livros = new Array(
    `Manual de Persuasão da FBI`,
    `Hábitos Atômicos`,
    `Uma Breve História do Tempo`,
    `O Codificador Limpo`,
    `O Conto de Cuthulu`
);
const precos = new Array(41.60,80.00,65.75,80.00,20.00);

//Adicionando um elemento a lista após sua declaração inicial

livros.push(`O Homem de Giz`);
precos.push(45.00);

//Deletando um item da lista 
//splice(número do index que irá começar o descarte, número de descartes que serão realizados)

livros.splice(4, 1);
precos.splice(4, 1);

//Exibição do catálogo de livros, seus respectivos indexes na array e preços ultilizando uma outra array com a mesma quantidade de elementos

console.log(`Livros disponíveis e seus respectivos preços: \n`)

let i = 0;

while (i < livros.length) {

    if (livros[i] == undefined) {

        console.log(`Livro: fora de estoque`);

    } else {

        console.log(`LIVRO: ${livros[i]} ID: ${i} PREÇO: R$${precos[i]} \n`);

    }

    i++;
}

//Alt + shift + f == Formatação automatica

