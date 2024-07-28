function comprar (){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseFloat(document.getElementById('qtd').value);
    let totalIngressos = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);
    let textNIngressos = document.querySelector(`#qtd-${tipoIngresso}`);    

    if(textNIngressos.innerHTML == "Esgotado"){
        totalIngressos = 0;
    }
        
    if( quantidade < 0 || isNaN(quantidade) == true || Number.isInteger(quantidade) == false) {
        alert(`A quantidade requerida (${quantidade}) é invávlida`);
    } else if(quantidade > totalIngressos) {
        alert(`Não há esta quantidade (${quantidade}) de ingressos disponíveis para compra.`);
    } else {
        totalIngressos-= quantidade;
        alert(`Compra realizada com sucesso!`);
        alert(`Total comprado: ${quantidade} ingressos.`);
    }

    if(totalIngressos == 0){
        textNIngressos.innerHTML = "Esgotado";
    }else{
        textNIngressos.innerHTML = `${totalIngressos}`;
    }
    
    document.getElementById('qtd').value = "";
}
//