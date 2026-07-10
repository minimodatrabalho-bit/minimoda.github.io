// Configuração do Supabase

const SUPABASE_URL = "https://ejmnpegmicovtuihyknv.supabase.co";

const SUPABASE_KEY = "sb_publishable_9JxyEQs6m_hMmqFK1Vo35g_sCy6GJbe";

// Inicializa o cliente

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
