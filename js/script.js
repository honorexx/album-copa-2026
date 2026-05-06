const paises = [
  { nome:"Abertura", sigla:"FWC", icone:"🏆", quantidade:14, categoria:"extras" },

  { nome:"Brasil", sigla:"BRA", bandeira:"https://flagcdn.com/w80/br.png", quantidade:20, categoria:"paises" },
  { nome:"Argentina", sigla:"ARG", bandeira:"https://flagcdn.com/w80/ar.png", quantidade:20, categoria:"paises" },
  { nome:"Uruguai", sigla:"URU", bandeira:"https://flagcdn.com/w80/uy.png", quantidade:20, categoria:"paises" },
  { nome:"Paraguai", sigla:"PAR", bandeira:"https://flagcdn.com/w80/py.png", quantidade:20, categoria:"paises" },
  { nome:"Equador", sigla:"ECU", bandeira:"https://flagcdn.com/w80/ec.png", quantidade:20, categoria:"paises" },
  { nome:"Colômbia", sigla:"COL", bandeira:"https://flagcdn.com/w80/co.png", quantidade:20, categoria:"paises" },

  { nome:"México", sigla:"MEX", bandeira:"https://flagcdn.com/w80/mx.png", quantidade:20, categoria:"paises" },
  { nome:"Estados Unidos", sigla:"USA", bandeira:"https://flagcdn.com/w80/us.png", quantidade:20, categoria:"paises" },
  { nome:"Canadá", sigla:"CAN", bandeira:"https://flagcdn.com/w80/ca.png", quantidade:20, categoria:"paises" },
  { nome:"Panamá", sigla:"PAN", bandeira:"https://flagcdn.com/w80/pa.png", quantidade:20, categoria:"paises" },
  { nome:"Haiti", sigla:"HAI", bandeira:"https://flagcdn.com/w80/ht.png", quantidade:20, categoria:"paises" },
  { nome:"Costa Rica", sigla:"CRC", bandeira:"https://flagcdn.com/w80/cr.png", quantidade:20, categoria:"paises" },

  { nome:"Alemanha", sigla:"GER", bandeira:"https://flagcdn.com/w80/de.png", quantidade:20, categoria:"paises" },
  { nome:"França", sigla:"FRA", bandeira:"https://flagcdn.com/w80/fr.png", quantidade:20, categoria:"paises" },
  { nome:"Portugal", sigla:"POR", bandeira:"https://flagcdn.com/w80/pt.png", quantidade:20, categoria:"paises" },
  { nome:"Espanha", sigla:"ESP", bandeira:"https://flagcdn.com/w80/es.png", quantidade:20, categoria:"paises" },
  { nome:"Itália", sigla:"ITA", bandeira:"https://flagcdn.com/w80/it.png", quantidade:20, categoria:"paises" },
  { nome:"Inglaterra", sigla:"ENG", bandeira:"https://flagcdn.com/w80/gb-eng.png", quantidade:20, categoria:"paises" },
  { nome:"Holanda", sigla:"NED", bandeira:"https://flagcdn.com/w80/nl.png", quantidade:20, categoria:"paises" },
  { nome:"Bélgica", sigla:"BEL", bandeira:"https://flagcdn.com/w80/be.png", quantidade:20, categoria:"paises" },
  { nome:"Croácia", sigla:"CRO", bandeira:"https://flagcdn.com/w80/hr.png", quantidade:20, categoria:"paises" },
  { nome:"Suíça", sigla:"SUI", bandeira:"https://flagcdn.com/w80/ch.png", quantidade:20, categoria:"paises" },
  { nome:"Turquia", sigla:"TUR", bandeira:"https://flagcdn.com/w80/tr.png", quantidade:20, categoria:"paises" },
  { nome:"Escócia", sigla:"SCO", bandeira:"https://flagcdn.com/w80/gb-sct.png", quantidade:20, categoria:"paises" },
  { nome:"Suécia", sigla:"SWE", bandeira:"https://flagcdn.com/w80/se.png", quantidade:20, categoria:"paises" },
  { nome:"Noruega", sigla:"NOR", bandeira:"https://flagcdn.com/w80/no.png", quantidade:20, categoria:"paises" },
  { nome:"Polônia", sigla:"POL", bandeira:"https://flagcdn.com/w80/pl.png", quantidade:20, categoria:"paises" },
  { nome:"Sérvia", sigla:"SRB", bandeira:"https://flagcdn.com/w80/rs.png", quantidade:20, categoria:"paises" },
  { nome:"Tchéquia", sigla:"CZE", bandeira:"https://flagcdn.com/w80/cz.png", quantidade:20, categoria:"paises" },

  { nome:"Japão", sigla:"JPN", bandeira:"https://flagcdn.com/w80/jp.png", quantidade:20, categoria:"paises" },
  { nome:"Coreia do Sul", sigla:"KOR", bandeira:"https://flagcdn.com/w80/kr.png", quantidade:20, categoria:"paises" },
  { nome:"Austrália", sigla:"AUS", bandeira:"https://flagcdn.com/w80/au.png", quantidade:20, categoria:"paises" },
  { nome:"Qatar", sigla:"QAT", bandeira:"https://flagcdn.com/w80/qa.png", quantidade:20, categoria:"paises" },
  { nome:"Arábia Saudita", sigla:"KSA", bandeira:"https://flagcdn.com/w80/sa.png", quantidade:20, categoria:"paises" },
  { nome:"Irã", sigla:"IRN", bandeira:"https://flagcdn.com/w80/ir.png", quantidade:20, categoria:"paises" },
  { nome:"Uzbequistão", sigla:"UZB", bandeira:"https://flagcdn.com/w80/uz.png", quantidade:20, categoria:"paises" },
  { nome:"Jordânia", sigla:"JOR", bandeira:"https://flagcdn.com/w80/jo.png", quantidade:20, categoria:"paises" },

  { nome:"Marrocos", sigla:"MAR", bandeira:"https://flagcdn.com/w80/ma.png", quantidade:20, categoria:"paises" },
  { nome:"Tunísia", sigla:"TUN", bandeira:"https://flagcdn.com/w80/tn.png", quantidade:20, categoria:"paises" },
  { nome:"Gana", sigla:"GHA", bandeira:"https://flagcdn.com/w80/gh.png", quantidade:20, categoria:"paises" },
  { nome:"África do Sul", sigla:"RSA", bandeira:"https://flagcdn.com/w80/za.png", quantidade:20, categoria:"paises" },
  { nome:"Senegal", sigla:"SEN", bandeira:"https://flagcdn.com/w80/sn.png", quantidade:20, categoria:"paises" },
  { nome:"Egito", sigla:"EGY", bandeira:"https://flagcdn.com/w80/eg.png", quantidade:20, categoria:"paises" },
  { nome:"Argélia", sigla:"ALG", bandeira:"https://flagcdn.com/w80/dz.png", quantidade:20, categoria:"paises" },
  { nome:"Nigéria", sigla:"NGA", bandeira:"https://flagcdn.com/w80/ng.png", quantidade:20, categoria:"paises" },
  { nome:"Costa do Marfim", sigla:"CIV", bandeira:"https://flagcdn.com/w80/ci.png", quantidade:20, categoria:"paises" },
  { nome:"Camarões", sigla:"CMR", bandeira:"https://flagcdn.com/w80/cm.png", quantidade:20, categoria:"paises" },

  { nome:"Coca-Cola LATAM", sigla:"CCL", icone:"🥤", quantidade:14, categoria:"extras" },
  { nome:"Coca-Cola USA", sigla:"CCU", icone:"🥤", quantidade:12, categoria:"extras" }
];

let paisAtual = "BRA";
let categoriaAtual = "todos";
let modoRepetidas = false;
let dados = {};
let usuarioAtual = null;

const abas = document.getElementById("abas");
const grade = document.getElementById("grade");
const busca = document.getElementById("busca");

async function iniciarApp(){
  try {
    const { data, error } = await supabaseClient.auth.getSession();

    if(error){
      console.error("Erro na sessão:", error);
      return;
    }

    const session = data.session;

    if(!session){
      window.location.href = "login.html";
      return;
    }

    usuarioAtual = session.user;

    await carregarDados();
    renderizarTudo();

  } catch (erro) {
    console.error("Erro ao iniciar app:", erro);
    renderizarTudo();
  }
}

async function carregarDados(){
  try {
    const { data, error } = await supabaseClient
      .from("figurinhas")
      .select("codigo, status")
      .eq("user_id", usuarioAtual.id);

    if(error){
      console.error("Erro ao carregar figurinhas:", error);
      dados = {};
      return;
    }

    dados = {};

    if(data){
      data.forEach(item => {
        dados[item.codigo] = item.status;
      });
    }

  } catch (erro) {
    console.error("Erro inesperado ao carregar:", erro);
    dados = {};
  }
}

function getPais(sigla){
  return paises.find(p => p.sigla === sigla);
}

function atualizarResumo(){
  let tenho = 0;
  let repetidas = 0;
  let total = 0;

  paises.forEach(pais => {
    total += pais.quantidade;

    for(let i = 1; i <= pais.quantidade; i++){
      const codigo = pais.sigla + i;
      const status = dados[codigo];

      if(status === "tenho") tenho++;

      if(status === "repetida"){
        tenho++;
        repetidas++;
      }
    }
  });

  const faltando = total - tenho;
  const porcentagem = total > 0 ? ((tenho / total) * 100).toFixed(1) : 0;

  document.getElementById("totalAlbum").innerText = total;
  document.getElementById("totalTenho").innerText = tenho;
  document.getElementById("totalFaltando").innerText = faltando;
  document.getElementById("totalRepetidas").innerText = repetidas;
  document.getElementById("porcentagemTopo").innerText = porcentagem + "%";
  document.getElementById("barraProgresso").style.width = porcentagem + "%";
}

function renderizarAbas(){
  abas.innerHTML = "";

  const termo = busca.value.toUpperCase();

  paises.forEach(pais => {
    if(categoriaAtual !== "todos" && pais.categoria !== categoriaAtual) return;

    if(!pais.nome.toUpperCase().includes(termo) && !pais.sigla.includes(termo)) return;

    const button = document.createElement("button");
    button.className = pais.sigla === paisAtual && !modoRepetidas ? "aba ativa" : "aba";

    const imagem = pais.bandeira
      ? `<img class="flag" src="${pais.bandeira}" alt="${pais.nome}">`
      : `<div class="icon-extra">${pais.icone}</div>`;

    button.innerHTML = `
      <div class="aba-left">
        ${imagem}
        <div>
          <strong>${pais.nome}</strong>
          <small>${pais.sigla}</small>
        </div>
      </div>
    `;

    button.onclick = () => {
      paisAtual = pais.sigla;
      modoRepetidas = false;
      renderizarTudo();
    };

    abas.appendChild(button);
  });
}

function renderizarPais(){
  const pais = getPais(paisAtual);

  if(!pais) return;

  const imagem = pais.bandeira
    ? `<img class="flag-large" src="${pais.bandeira}" alt="${pais.nome}">`
    : `<div class="icon-extra">${pais.icone}</div>`;

  document.getElementById("paisFlag").innerHTML = imagem;
  document.getElementById("paisNome").innerText = `${pais.nome} - ${pais.sigla}`;
  document.getElementById("paisDescricao").innerText = `${pais.sigla}1 até ${pais.sigla}${pais.quantidade}`;

  grade.innerHTML = "";

  let tenho = 0;
  let repetidas = 0;

  for(let i = 1; i <= pais.quantidade; i++){
    const codigo = pais.sigla + i;
    const status = dados[codigo] || "faltando";

    if(status === "tenho") tenho++;

    if(status === "repetida"){
      tenho++;
      repetidas++;
    }

    const div = document.createElement("div");
    div.className = `figurinha ${status}`;

    let texto = "Faltando";
    if(status === "tenho") texto = "Tenho";
    if(status === "repetida") texto = "Repetida";

    div.innerHTML = `
      <strong>${codigo}</strong>
      <span>${texto}</span>
    `;

    div.onclick = () => alternarStatus(codigo);

    grade.appendChild(div);
  }

  document.getElementById("paisTenho").innerText = tenho;
  document.getElementById("paisFaltando").innerText = pais.quantidade - tenho;
  document.getElementById("paisRepetidas").innerText = repetidas;
}

function renderizarTodasRepetidas(){
  grade.innerHTML = "";

  document.getElementById("paisFlag").innerHTML = `<div class="icon-extra">🔁</div>`;
  document.getElementById("paisNome").innerText = "Todas as repetidas";
  document.getElementById("paisDescricao").innerText = "Aqui aparecem todas as suas repetidas juntas";

  let totalRepetidas = 0;

  paises.forEach(pais => {
    for(let i = 1; i <= pais.quantidade; i++){
      const codigo = pais.sigla + i;

      if(dados[codigo] === "repetida"){
        totalRepetidas++;

        const div = document.createElement("div");
        div.className = "figurinha repetida";

        div.innerHTML = `
          <strong>${codigo}</strong>
          <span>${pais.nome}</span>
        `;

        div.onclick = () => alternarStatus(codigo);

        grade.appendChild(div);
      }
    }
  });

  document.getElementById("paisTenho").innerText = "-";
  document.getElementById("paisFaltando").innerText = "-";
  document.getElementById("paisRepetidas").innerText = totalRepetidas;

  if(totalRepetidas === 0){
    grade.innerHTML = `
      <div class="figurinha">
        <strong>0</strong>
        <span>Nenhuma repetida</span>
      </div>
    `;
  }
}

async function alternarStatus(codigo){
  const atual = dados[codigo] || "faltando";
  let novoStatus;

  if(atual === "faltando"){
    novoStatus = "tenho";
    dados[codigo] = "tenho";
  } 
  else if(atual === "tenho"){
    novoStatus = "repetida";
    dados[codigo] = "repetida";
  } 
  else {
    novoStatus = "faltando";
    delete dados[codigo];
  }

  renderizarTudo();

  const salvou = await salvarFigurinha(codigo, novoStatus);

  if(!salvou){
    console.error("Não foi possível salvar no Supabase.");
  }
}

async function salvarFigurinha(codigo, status){
  if(!usuarioAtual) return false;

  try {
    if(status === "faltando"){
      const { error } = await supabaseClient
        .from("figurinhas")
        .delete()
        .eq("user_id", usuarioAtual.id)
        .eq("codigo", codigo);

      if(error){
        console.error("Erro ao remover figurinha:", error);
        return false;
      }

      return true;
    }

    const { error } = await supabaseClient
      .from("figurinhas")
      .upsert(
        {
          user_id: usuarioAtual.id,
          codigo: codigo,
          status: status
        },
        {
          onConflict: "user_id,codigo"
        }
      );

    if(error){
      console.error("Erro ao salvar figurinha:", error);
      return false;
    }

    return true;

  } catch (erro) {
    console.error("Erro inesperado ao salvar:", erro);
    return false;
  }
}

function mostrarCategoria(categoria){
  categoriaAtual = categoria;
  modoRepetidas = false;

  const primeiro = paises.find(p => categoria === "todos" || p.categoria === categoria);

  if(primeiro){
    paisAtual = primeiro.sigla;
  }

  renderizarTudo();
}

function mostrarRepetidas(){
  modoRepetidas = true;
  renderizarTudo();
}

function renderizarTudo(){
  renderizarAbas();

  if(modoRepetidas){
    renderizarTodasRepetidas();
  } else {
    renderizarPais();
  }

  atualizarResumo();
}

async function sair(){
  await supabaseClient.auth.signOut();
  window.location.href = "login.html";
}

if(busca){
  busca.addEventListener("input", renderizarAbas);
}

iniciarApp();