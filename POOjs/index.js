
class Cliente{
    nome;
    cpf;
    email; 
}

class Carteirinha{
    filial;
    banido = false;
    quantidadeDeEmprestimos = 0;
    prazo = new Array();

    pegarEmprestimo(quantidade){
      const checagem = quantidade + this.quantidadeDeEmprestimos < 4 && this.banido != true;  
      if(checagem){
        this.quantidadeDeEmprestimos += quantidade;
        for(let i = 0; i < quantidade; i++){
            this.prazo.push(`1 semana`);
        }
      }
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Praxe";
cliente1.cpf = "1122334455";
cliente1.email = "praxe123gta@hotmail.com";


const cliente2 = new Cliente();

cliente2.nome = "Clayn";
cliente2.cpf = "9988776655";
cliente2.email = "clayn123minecraft@hotmail.com";


const carteirinhaPraxe = new Carteirinha();
carteirinhaPraxe.filial = "A-01";

carteirinhaPraxe.pegarEmprestimo(3)

console.log(carteirinhaPraxe);

const carteirinhaClayn = new Carteirinha();
carteirinhaClayn.filial = "A-01";
carteirinhaClayn.banido = false;