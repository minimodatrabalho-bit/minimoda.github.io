// ================================
// FORMULÁRIO MINI MODA
// ================================

const formulario = document.getElementById("formPedido");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "") {
        alert("Digite seu nome.");
        return;
    }

    if (email === "") {
        alert("Digite seu e-mail.");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (telefone === "") {
        alert("Digite seu telefone.");
        return;
    }

    if (quantidade === "" || Number(quantidade) <= 0) {
        alert("Informe uma quantidade válida.");
        return;
    }

    alert("Solicitação enviada com sucesso!");

    console.log({
        nome,
        email,
        telefone,
        produto,
        quantidade,
        mensagem
    });

    formulario.reset();

});
