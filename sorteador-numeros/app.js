let quantidade = parseInt(document.getElementById('quantidade').value);
let comeco = parseInt(document.getElementById('de').value);
let fim = parseInt(document.getElementById('ate').value);
let sorteados = [];
let resposta = document.querySelector('#resultado');



function sortear() {
    if (comeco >= fim || quantidade > (fim - comeco + 1)){
        return alert('Os campos informados estão com valores incorretos, favor, revisar.');
    
    }
     
    
    let numero;
    for(let i = 0; i < quantidade; i++){
        numero = gerarNumero(comeco, fim);
       
        while(sorteados.includes(numero)){
            numero = gerarNumero(comeco, fim);
        }       
        
        sorteados.push(numero);
    }
    console.log(sorteados);
    resposta.innerHTML = `<label class= "texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
    
}

function gerarNumero (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function reiniciar() {
    sorteados = [];
    resposta.innerHTML = `<label class= "texto__paragrafo"> Números sorteados:  Nenhum até agora </label>`;
    document.querySelector('#quantidade').value = '';
    document.querySelector('#ate').value = '';
    document.querySelector('#de').value = '';
    alterarStatusBotao();
    
}

function alterarStatusBotao(){

    let botao = document.getElementById('btn-reiniciar');
    
    if(botao.classList.contains('container__botao-desabilitado')){
		botao.classList.remove('container__botao-desabilitado');
		botao.classList.add('container__botao');
	}
	else{
		botao.classList.remove('container__botao');
		botao.classList.add('container__botao-desabilitado');
	}
	
}

