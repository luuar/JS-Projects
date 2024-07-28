//Quando clicar, alterar botão e tonalidade da imagem de aluguel.




function alterarStatus(id) {
    let liClick = document.getElementById(`game-${id}`); 
    let imgLi = liClick.querySelector('.dashboard__item__img');
    let botaoLi = liClick.querySelector('.dashboard__item__button');
    if(botaoLi.classList.contains('dashboard__item__button--return')){
        alert("Devolução feita com sucesso!");
        botaoLi.innerHTML = "Alugar";
        imgLi.classList.remove('dashboard__item__img--rented');
        botaoLi.classList.remove('dashboard__item__button--return');
    } else{
        alert("Aluguel do jogo feito com sucesso!");
        botaoLi.innerHTML = "Devolver";
        imgLi.classList.add('dashboard__item__img--rented');
        botaoLi.classList.add('dashboard__item__button--return');
    }
}

