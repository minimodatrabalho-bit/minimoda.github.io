const SUPABASE_URL = "https://ejmnpegmicovtuihyknv.supabase.co";
const SUPABASE_KEY = "sb_publishable_9JxyEQs6m_hMmqFK1Vo35g_sCy6GJbe";

// Carrega a biblioteca do Supabase
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
document.head.appendChild(script);

script.onload = () => {

    const { createClient } = supabase;

    const client = createClient(SUPABASE_URL, SUPABASE_KEY);

    const form = document.getElementById("formPedido");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const produto = document.getElementById("produto").value;
        const quantidade = parseInt(document.getElementById("quantidade").value);
        const mensagem = document.getElementById("mensagem").value;

        const { error } = await client
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

            alert("Erro ao salvar!\n\n" + error.message);
            console.log(error);

        } else {

            alert("Pedido enviado com sucesso!");

            form.reset();

        }

    });

};
