const img = document.querySelector("#img");
let indice = 0;
let intervalId = null;

const vermelho = document.querySelector("#vermelho");
vermelho.addEventListener("click", semaforoVermelho);

const amarelo = document.querySelector("#amarelo");
amarelo.addEventListener("click", semaforoAmarelo);

const verde = document.querySelector("#verde");
verde.addEventListener("click", semaforoVerde);

const auto = document.querySelector("#auto");
auto.addEventListener("click", semaforoAutomatico);



function semaforoAutomatico(){
    intervalId = setInterval(constante, 1000);
}

function constante(){
    const cores = ['img/vermelho.png', 'img/amarelo.png', 'img/verde.png'];
    img.src = cores[indice];

    indice++
    if (indice==3){
        indice=0;
    }
}

function parar(){
    clearInterval (intervalId);
}

function semaforoVermelho(){
    img.src = 'img/vermelho.png';
    parar();
}

function semaforoAmarelo(){
    img.src = 'img/amarelo.png';
    parar();
}

function semaforoVerde(){
    img.src = 'img/verde.png';
    parar();
}