export class Biblioteca{
    nome;
    filial;
    #numeroDeClientes = 0;
    horarioDeFuncionamento;
    livros = new Array();

    constructor(nome,filial,horarioDeFuncionamento){
        this.nome = nome;
        this.filial = filial;
        this.#numeroDeClientes = 0;      
        this.horarioDeFuncionamento = horarioDeFuncionamento;
    }
    set numeroDeClientes(numero){
        this.#numeroDeClientes = numero;
    }
    get numeroDeClientes(){
        return this.#numeroDeClientes;
    }

    
    adicionarLivros(livros){
        this.livros = livros;
        
    }
    emprestarLivros(livro){
        
        for(let i = 0; i <= livro.length; i++){
            if(this.livros.includes(livro)){
                this.livros = this.livros - livro[i];
                return "ganhou";
            }
            return "perdeu";
        }
    }
}


