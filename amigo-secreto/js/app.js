let listaNomes = [];
let textLista = document.getElementById("lista-amigos");
let listaSorteio = document.getElementById("lista-sorteio");

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
    if(listaNomes.includes(nomeAmigo)){
        alert("Essa pessoa já está incluída no sorteio.")
    } else if(nomeAmigo == " "){
        alert("O valor inserido não é válido, por favor, insira um nome ou apelido válido");
    } else{
    listaNomes.push(nomeAmigo); 
    textLista.innerHTML = `${listaNomes}`;
    document.getElementById("nome-amigo").value = " ";
    }
}

function sortear() {
    if(listaNomes.length <= 3){
        alert("Não há pessoas suficientes para sortear. Adicione mais amigos");
    } else{
        embaralha(listaNomes);
          
        for(let i = 0; i < listaNomes.length; i++){
            if(i == listaNomes.length - 1){
                listaSorteio.innerHTML += `${listaNomes[i]} -> ${listaNomes[0]}<br>`;
            } else {
                listaSorteio.innerHTML += `${listaNomes[i]} -> ${listaNomes[i + 1]}<br>`;
            }
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar() {
<<<<<<< HEAD
    textLista.innerHTML = " ";
=======
   textLista.innerHTML = " ";
>>>>>>> d14b488de274bbf97341cc7e9df6b6f5cdf3e083
    listaSorteio.innerHTML = " ";
    listaNomes = [];
}
