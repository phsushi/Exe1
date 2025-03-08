import { Biblioteca } from "./Biblioteca.js";
import { Cliente } from "./Cliente.js";


export class Carteirinha {
  static numeroDeCarteirinhas = 0;
  cliente;
  biblioteca;
  banido = false;
  quantidadeDeEmprestimos = 0;
  prazo = new Array();

  constructor(cliente, biblioteca) {
    if(!biblioteca instanceof Biblioteca) {
      return;
    }
    if(!cliente instanceof Cliente) {
      return;
    }
    this.cliente = cliente;
    this.biblioteca = biblioteca;
    Carteirinha.numeroDeCarteirinhas++;
  }
  



  pegarEmprestimo(biblioteca, pedido) {
    if (pedido.lengh >= 4) {
      return;
    }
    if(!biblioteca instanceof Biblioteca) {
      return;
    }
    if(biblioteca != this.biblioteca){
      return;
    }
     
  }
}