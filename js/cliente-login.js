const supabaseUrl = "https://ejmnpegmicovtuihyknv.supabase.co";

const supabaseKey = "sb_publishable_9JxyEQs6m_hMmqFK1Vo35g_sCy6GJbe";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

const form = document.querySelector("form");

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

        alert("E-mail ou senha inválidos.");

        return;

    }

    alert("Login realizado com sucesso!");

    window.location.href = "index.html";

});
