/* 1-Crie uma variável produtos, que contenha um array de objetos,
    com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis,
    informando os seguintes detalhes: Nome do Produto, Valor do Produto,
    Qualidade do Produto e Status.


//A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
//A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.


//  2 Em seguida, um usuário deseja filtrar os produtos,
//   com base em alguns critérios. Selecione todos os produtos que tenham: 


// Valor entre 482 e 1600;
// Qualidade superior a 60;
// Status como disponível.


// O resultado do filtro deve ser armazenado na variável carrinho.


3 -Por fim, é necessário exibir todos os itens presentes no carrinho,
com seus nomes e preços correspondentes, e no final um valor total,
resultante da somatória de todos os produtos.*/
 

let Produtos = function (nomeP, valorP, qtdP, qualidadeP, statusP){ 
this.nome = nomeP;
this.valor = valorP;
this.qtd = qtdP;
this.qualidade = qualidadeP;
this.status = statusP;

}

let  Suplementos= [];
Suplementos.push(new Produtos("WheyProtein", 250, 9, true));
Suplementos.push(new Produtos("Bcaa", 250, 9, false));
Suplementos.push(new Produtos("creatina", 250, 9, true));

let filtroP = Suplementos.filter(function(item){
if ((item.valorP >= 482 && item.valor <= 1600) && (qualidadeP >= 6) && (item.statusP== true))
return  item;
}) ;


console.log(Suplementos)

//let carrinho[];
//carrinho.push(new filtroP("creatina", 250, 9, false));
//console.log(carrinho);
//let venda [];



