document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mensagem = document.querySelector("textarea").value;

    const { error } = await supabase
        .from("contatos")
        .insert([
            {
                nome,
                email,
                mensagem
            }
        ]);

    if (error) {
        alert("Erro ao enviar mensagem!");
    } else {
        alert("Mensagem enviada com sucesso!");
        e.target.reset();
    }
});
