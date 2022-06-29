const produtos = [ 
    {
        nome : "Celular",
        valor : 1785.50,
        qualidade : 8,
        status : true
    },
    {
        nome : "Tenis",
        valor : 450.50,
        qualidade : 10,
        status : true
    },
    {
        nome : "Mouse",
        valor : 150.00,
        qualidade : 4,
        status : true
    }
];

const carrinho = {
    produtos : produtos,
    valor : function(inicio, fim){
        this.produtos = this.produtos.filter(function(item){
            return item.valor >= inicio && item.valor <= fim;
        });
    },
    qualidade : function(valor){
        this.produtos = this.produtos.filter( item=> item.qualidade >= valor );
    },
    status : function(){
        this.produtos = this.produtos.filter( item=> item.status == true );
    }
}

console.log( carrinho.produtos );

carrinho.valor(10,1000);
carrinho.qualidade(10);
carrinho.status();

console.log( carrinho.produtos );