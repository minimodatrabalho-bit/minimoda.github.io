const supabaseUrl = "SUA_URL_DO_SUPABASE";
const supabaseKey = "SUA_CHAVE_ANON";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

const form = document.getElementById("formCadastro");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmarSenha").value;

    if(senha !== confirmar){

        alert("As senhas não são iguais.");

        return;

    }

    const { error } = await supabase

        .from("clientes")

        .insert([{

            nome,
            email,
            telefone,
            senha

        }]);

    if(error){

        alert("Erro ao cadastrar.");

        console.log(error);

    }else{

        alert("Cadastro realizado com sucesso!");

        window.location.href="cliente-login.html";

    }

});
