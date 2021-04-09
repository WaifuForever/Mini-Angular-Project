export class Produto {
    id: number;
    nome: string;
    desc: string;
    preco: number;
    dtAtualizacao: Date;

    constructor (id: number, nomeProduto: string, desc: string, preco: number, dtAtualizacao: Date){
        this.id = id;
        this.nome = nomeProduto;
        this.desc = desc;
        this.preco = preco;
        this.dtAtualizacao = dtAtualizacao;
    }
}