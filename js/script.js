// ===============================
// MINI MODA
// script.js
// ===============================

// Mensagem no console
console.log("Mini Moda carregado com sucesso!");

// ===============================
// Efeito dos cards
// ===============================

const cards = document.querySelectorAll(".card");

const aparecer = () => {

    cards.forEach(card => {

        const topo = card.getBoundingClientRect().top;
        const tela = window.innerHeight;

        if (topo < tela - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

};

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

});

window.addEventListener("scroll", aparecer);
window.addEventListener("load", aparecer);

// ===============================
// Botão voltar ao topo
// ===============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "⬆";
botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===============================
// Estilo botão
// ===============================

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "25px";
botaoTopo.style.right = "25px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.background = "#ff69b4";
botaoTopo.style.color = "#fff";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
botaoTopo.style.zIndex = "999";

botaoTopo.addEventListener("mouseover", () => {

    botaoTopo.style.background = "#5578d4";

});

botaoTopo.addEventListener("mouseout", () => {

    botaoTopo.style.background = "#ff69b4";

});

// ===============================
// Rodapé
// ===============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Mini Moda - Todos os direitos reservados.`;

}
