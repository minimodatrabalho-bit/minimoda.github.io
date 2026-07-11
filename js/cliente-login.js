const SUPABASE_URL = "https://ejmnpegmicovtuihyknv.supabase.co";
const SUPABASE_KEY = "sb_publishable_9JxyEQs6m_hMmqFK1Vo35g_sCy6GJbe";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const form = document.getElementById("formLogin");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const { data, error } = await supabase
        .from("clientes")
        .select("*")
        .eq("email", email)
        .eq("senha", senha)
        .single();

    if (error || !data) {

        alert("E-mail ou senha incorretos.");
        return;

    }

    // Salva os dados do cliente
    localStorage.setItem("cliente", JSON.stringify(data));

    alert("Login realizado com sucesso!");

    // Entra na loja
    window.location.href = "index.html";

});
