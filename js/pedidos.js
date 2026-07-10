const SUPABASE_URL = "https://ejmnpegmicovtuihyknv.supabase.co";
const SUPABASE_KEY = "sb_publishable_9JxyEQs6m_hMmqFK1Vo35g_sCy6GJbe";

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
document.head.appendChild(script);

script.onload = async () => {

    const { createClient } = supabase;

    const client = createClient(SUPABASE_URL, SUPABASE_KEY);

    const { data, error } = await client
        .from("pedidos")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.log(error);
        return;
    }

    const tbody = document.querySelector("#tabelaPedidos tbody");

    data.forEach(pedido => {

        tbody.innerHTML += `
            <tr>
                <td>${pedido.nome}</td>
                <td>${pedido.email}</td>
                <td>${pedido.telefone}</td>
                <td>${pedido.produto}</td>
                <td>${pedido.quantidade}</td>
                <td>${pedido.mensagem}</td>
            </tr>
        `;

    });

};
