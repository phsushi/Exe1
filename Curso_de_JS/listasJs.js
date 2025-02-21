//Declaração de uma array e instânciamento de elementos 

const livros = new Array(
    `Manual de Persuasão da FBI`,
    `Hábitos Atômicos`,
    `Uma Breve História do Tempo`,
    `O Codificador Limpo`,
    `O Conto de Cuthulu`
);

//Adicionando um elemento a lista após sua declaração inicial

livros.push(`O Homem de Giz`);

//Deletando um item da lista 
//splice(número do index que irá começar o descarte, número de descartes que serão realizados)

livros.splice(4, 1);

//Exibição do catálogo de livros e seus respectivos indexes na array

console.log(`Livros disponíveis: \n`)
let i = 0;
while (i < 6) {
    if (livros[i] == undefined) {
        console.log(`Livro: fora de estoque`);
    } else {
        console.log(`Livro: ${livros[i]} ID: ${i} \n`);
    }
    i++;
}

//Alt + shift + f == Formatação automatica

