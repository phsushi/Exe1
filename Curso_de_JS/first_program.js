console.log("Variáveis e etc e tals");


let muito = "not a number";
var cant = "not a number";
const receba = "valor";

console.log(muito + cant + receba);

/* Adendo --> shift + alt copia a linha inteira 
onde estiver o ponteiro ou então o que for selecionado */

// crt + out inserção em várias linhas ao mesmo tempo

const rebeba = new Array(
    '1',
    '2',
    '3',
    '4',
    '5'
);
const rebeba2 = new Array(
    '5',
    '4',
    '3',
    '2',
    '1'
);

for(let i = 0; i<rebeba.length; i++){
    if(rebeba.includes(rebeba2[i].toString())){
        console.log("interpretou");
    }
}
