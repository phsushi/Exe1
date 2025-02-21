//Declaração da lista de livros
const livros = new Array(
    `Manual de Persuasão da FBI`,
    `Hábitos Atômicos`,
    `Uma Breve História do Tempo`,
    `O Codificador Limpo`,
    `O Conto de Cuthulu`
);
//Declaração do pedido
const pedido = "Uma Breve História do Tempo";

//Consulta na lista de livros

let i = 0;
while(i <= livros.length){
    if(pedido == livros[i]){
        console.log(`Há disponível!`)
        break;
    }
    if(pedido != livros[i] && i == livros.length){
        console.log(`Não há disponível!`)
        break;
    }
    i++;
}

/*
for(let i = 0; i <= livros.length; i++){
    if(pedido == livros[i]){
        console.log(`Há disponível!`)
        break;
    }
    if(pedido != livros[i] && i == livros.length){
        console.log(`Não há disponível!`)
        break;
    }
}
*/


//Declaração de requisitos para aquisição da carteirinha da biblioteca
const rg = "123456789102";
const cpf = "123456789102"; 

//Requesitos dentro de requisitos 
let cpfPoggers = cpf.length == 12 && cpf != "";
let rgPoggers = rg.length == 12 && rg != "";
//Resultado em true || false se a pessoa pode se matricular
let podeMatricular = rgPoggers == true && cpfPoggers == true;

console.log(podeMatricular);


