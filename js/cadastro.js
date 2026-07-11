const SUPABASE_URL = "https://ejmnpegmicovtuihyknv.supabase.co";
const SUPABASE_KEY = "sb_publishable_9JxyEQs6m_hMmqFK1Vo35g_sCy6GJbe";

// Carrega a biblioteca do Supabase
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
document.head.appendChild(script);

script.onload = () => {

    const { createClient } = supabase;

    const client = createClient(SUPABASE_URL, SUPABASE_KEY);

    const form = document.getElementById("formCadastro");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const senha = document.getElementById("senha").value;
        const confirmar = document.getElementById("confirmarSenha").value;

        if (senha !== confirmar) {

            alert("As senhas não são iguais.");
            return;

        }

        const { error } = await client
            .from("clientes")
            .insert([
                {
                    nome,
                    email,
                    telefone,
                    senha
                }
            ]);

        if (error) {

            alert("Erro ao cadastrar!\n\n" + error.message);
            console.log(error);

        } else {

            alert("Cadastro realizado com sucesso!");

            form.reset();

            window.location.href = "cliente-login.html";

        }

    });

};
