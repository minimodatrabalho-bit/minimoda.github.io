// ===============================
// CONTATO - MINI MODA
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mensagem = document.querySelector("textarea").value;

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos.");
        return;
    }

    const { error } = await supabase
        .from("contatos")
        .insert([
            {
                nome: nome,
                email: email,
                mensagem: mensagem
            }
        ]);

    if (error) {
        console.error(error);
        alert("Erro ao enviar mensagem!");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    form.reset();

});
