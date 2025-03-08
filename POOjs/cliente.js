export class Cliente{
    nome;
    #cpf;
    #email; 
    #telefone;

    constructor(nome, cpf, email){
        this.nome = nome;
        this.#cpf = cpf;
        this.#email = email; 
    }
    get cpf(){
        return this.#cpf;
    }
    get email(){
        return this.#email;
    }
    get telefone(){
        return this.#telefone;
    }
    set telefone(telefone){
        if(telefone != "" && !telefone.lenght < 9){
            this.#telefone = telefone;
        }  
    }
    
}