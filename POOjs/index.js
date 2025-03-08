import { Carteirinha } from "./Carteirinha.js";
import { Cliente } from "./Cliente.js";
import { Biblioteca } from "./Biblioteca.js";

//Criação do cliente1
const cliente1 = new Cliente('Praxe','1122334455','praxe123gta@hotmail.com');
cliente1.telefone = "receba123gta";
console.log(cliente1.telefone);


//Criação do cliente2
const cliente2 = new Cliente('Clayn','9988776655','clayn123minecraft@hotmail.com');


//Criação da biblioteca
const biblioteca1 = new Biblioteca('Biblioteca de Platão','A-01','07:30 até 18:30');
const livros = new Array(
    `Manual de Persuasão da FBI`,
    `Hábitos Atômicos`,
    `Uma Breve História do Tempo`,
    `O Codificador Limpo`,
    `O Conto de Cuthulu`
);
biblioteca1.adicionarLivros(livros);


//Criação da carteirinha do cliente1 
const carteirinhaPraxe = new Carteirinha(cliente1,biblioteca1);


//Criação da carteirinha do cliente2
const carteirinhaClayn = new Carteirinha(cliente2,biblioteca1);


//Criando lista de livros que o cliente deseja
const pedido = new Array(
    `O Codificador Limpo`,
    `O Conto de Cuthulu`
);

console.log(`\n Número de carteirinhas: ${Carteirinha.numeroDeCarteirinhas}`);