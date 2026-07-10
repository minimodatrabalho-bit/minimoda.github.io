// ===============================
// FORMULÁRIO MINI MODA
// ===============================

const formulario = document.getElementById("formPedido");

formulario.addEventListener("submit", async function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const produto = document.getElementById("produto").value;
    const quantidade = Number(document.getElementById("quantidade").value);
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !telefone || !produto || quantidade <= 0) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    const { error } = await supabase
        .from("pedidos")
        .insert([
            {
                nome,
                email,
                telefone,
                produto,
                quantidade,
                mensagem
            }
        ]);

    if (error) {
        console.error(error);
        alert("Erro ao salvar o pedido.");
        return;
    }

    alert("Pedido enviado com sucesso!");

    formulario.reset();

});
