function entrar() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("site").style.display = "block";

    window.scrollTo(0, 0);
}


function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML =
        "Maysa, entre tantas pessoas que poderiam cruzar meu caminho, fico feliz que nossos caminhos tenham se encontrado. Você se tornou alguém muito especial para mim. ♥";

    mensagem.style.padding = "20px";
}