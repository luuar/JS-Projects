let total = 0;
let carrinho = document.getElementById('lista-produtos');
let valorTotal = document.querySelector('#valor-total');

function adicionar() {
    let selectProdutos = document.getElementById('produto').value;
    let nomeProduto = selectProdutos.split('-')[0];
    let valorProduto = parseInt(selectProdutos.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    //Somar:
    let soma = valorProduto * quantidade;
    total+=soma;
    valorTotal.innerHTML = `R$ ${total}`;   
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${valorProduto}</span>
        </section>`;
    
    document.getElementById('quantidade').value = "";
 
          

}

function limpar() {
    carrinho.innerHTML = "";
    valorTotal.textContent = `R$ 0`; 

}