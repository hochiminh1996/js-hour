

document.addEventListener("DOMContentLoaded", principal);
// carregar a função principal ao iniciar a página


// criar a data hora
function build_hour() {
    var c_hora = document.querySelector("#hora");
    var data = new Date();


    // Manipulando a quantidade de digitos que aparecerá em h, m, s
    c_hora.innerHTML = `
        ${data.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2})}:${data.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${data.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2})}
    `;
    return data;
}

// criar o elemento imagem
function build_img(url_imagem) {
    var div_img = document.querySelector("#img");
    var img = document.createElement("img");
    img.setAttribute("id", "imagem");
    img.src = url_imagem;

    div_img.appendChild(img);
}


// Saudação madrugada, manhã, tarde ou noite
function saudacao(saudacao) {
    document.querySelector("#saudacao").innerHTML = saudacao;
}


function background(color) {
    document.body.style.background = color;

}

function principal() {

    if (build_hour().getHours() >= 0 && build_hour().getHours() < 6) {
        background("rgba(0,0,0,.9)");
        build_img("img/midnight-p.jpeg");
        saudacao("Boa madrugada :)");
    } else if (build_hour().getHours >= 6 && build_hour().getHours < 12) {
        background("#6A7095");
        build_img("img/morning-p.jpg");
        saudacao("Bom dia :)");
    } else if (build_hour().getHours() >= 12 && build_hour().getHours() < 18) {
        background("#402639");
        build_img("img/afternoon-p.jpg");
        saudacao("Boa tarde :)");
    } else if (build_hour().getHours() >= 18 && build_hour().getHours() < 24) {
        background("#5B3473");
        build_img("img/night-p.jpg");
        saudacao("Boa noite :)");
    }

}


setInterval(build_hour, 1000);
/*
    A função setInterval é uma função global em JavaScript que é usada para chamar uma função ou avaliar uma expressão em um intervalo de tempo especificado (em milissegundos).

*/
