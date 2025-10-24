const key = "d26dd116497131c30bb7694ddf41669c"


function pesquisarCidade(){
    let cidade = document.getElementById("cidade").value
    console.log(cidade);
    dadosAPI(cidade)

}

async function dadosAPI(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`).then(Response => Response.json())
    console.log(dados)
    trocarDados(dados)
}

// Atualiza os dados na tela

function trocarDados(dados){
    document.getElementById("nome-cidade").innerHTML = "Tempo em: " + dados.name
    document.getElementById("img-icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
        document.getElementById('previsao').innerHTML = dados.weather[0].description.toUpperCase();
    document.getElementById("umidade").innerHTML = "Umidade relativa do ar: "+ dados.main.humidity + "%"
}