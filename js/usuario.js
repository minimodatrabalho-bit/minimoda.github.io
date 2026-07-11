const cliente = JSON.parse(localStorage.getItem("cliente"));

const usuario = document.getElementById("usuarioLogado");

if (usuario) {

    if (cliente) {

        usuario.innerHTML = `
            <span style="color:white;font-weight:600;">
                <i class="fa-solid fa-user"></i>
                Olá, ${cliente.nome}
            </span>

            <a href="#" id="sair" style="margin-left:15px;color:white;">
                Sair
            </a>
        `;

    } else {

        usuario.innerHTML = `
            <a href="cliente-login.html" class="btn-login">
                Entrar
            </a>
        `;

    }

}

document.addEventListener("click", function(e){

    if(e.target.id === "sair"){

        localStorage.removeItem("cliente");
        window.location.href = "cliente-login.html";

    }

});
