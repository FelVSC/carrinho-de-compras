function adicionar() {
    let produto = document.getElementById('produto').value;  
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitário = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    if (!produto || produto === '') {
        return;
      }
    
      if (!quantidade || quantidade <= 0) {
        return;
      }
    
    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML+`<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${valorUnitário}</span>
  </section>`;

  
    
  calcularTotal(valorUnitário, quantidade);
    exibirItensCarrinho();

}

document.getElementById('valor-total').innerHTML = `R$ ${0}`;
document.getElementById('lista-produtos').innerHTML = '';
let valorTotal = 0;
function calcularTotal(x, y) {
    let valorUnitárioXQuantidade = x * y;
    valorTotal = valorTotal + valorUnitárioXQuantidade

    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.innerHTML = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0
    
}


function limpar() {
    let apagarCarrinho = document.getElementsByClassName('botao-form botao-limpar');
    valorTotal = 0;
    document.getElementById('valor-total').innerHTML = `R$ ${0}`;
    document.getElementById('lista-produtos').innerHTML = '';
}