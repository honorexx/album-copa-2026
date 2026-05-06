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

  { nome:"Alemanha", sigla:"GER", bandeira:"https://flagcdn.com/w80/de.png", quantidade:20, categoria:"paises" },
  { nome:"França", sigla:"FRA", bandeira:"https://flagcdn.com/w80/fr.png", quantidade:20, categoria:"paises" },
  { nome:"Portugal", sigla:"POR", bandeira:"https://flagcdn.com/w80/pt.png", quantidade:20, categoria:"paises" },
  { nome:"Espanha", sigla:"ESP", bandeira:"https://flagcdn.com/w80/es.png", quantidade:20, categoria:"paises" },
  { nome:"Itália", sigla:"ITA", bandeira:"https://flagcdn.com/w80/it.png", quantidade:20, categoria:"paises" },
  { nome:"Inglaterra", sigla:"ENG", bandeira:"https://flagcdn.com/w80/gb-eng.png", quantidade:20, categoria:"paises" },

  { nome:"Japão", sigla:"JPN", bandeira:"https://flagcdn.com/w80/jp.png", quantidade:20, categoria:"paises" },
  { nome:"Coreia do Sul", sigla:"KOR", bandeira:"https://flagcdn.com/w80/kr.png", quantidade:20, categoria:"paises" },

  { nome:"Marrocos", sigla:"MAR", bandeira:"https://flagcdn.com/w80/ma.png", quantidade:20, categoria:"paises" },

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

  const { data: { session } } =
    await supabaseClient.auth.getSession();

  if(!session || !session.user){
    window.location.replace("login.html");
    return;
  }

  usuarioAtual = session.user;

  await carregarDados();

  renderizarTudo();
}

async function carregarDados(){

  const { data, error } = await supabaseClient
    .from("figurinhas")
    .select("codigo, status")
    .eq("user_id", usuarioAtual.id);

  dados = {};

  if(error){
    console.warn("Erro ao carregar figurinhas:", error);
    renderizarTudo();
    return;
  }

  if(data){

    data.forEach(item => {
      dados[item.codigo] = item.status;
    });

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

      if(status === "tenho"){
        tenho++;
      }

      if(status === "repetida"){
        tenho++;
        repetidas++;
      }
    }

  });

  const faltando = total - tenho;

  const porcentagem =
    ((tenho / total) * 100).toFixed(1);

  document.getElementById("totalAlbum").innerText = total;
  document.getElementById("totalTenho").innerText = tenho;
  document.getElementById("totalFaltando").innerText = faltando;
  document.getElementById("totalRepetidas").innerText = repetidas;

  document.getElementById("porcentagemTopo").innerText =
    porcentagem + "%";

  document.getElementById("barraProgresso").style.width =
    porcentagem + "%";
}

function renderizarAbas(){

  abas.innerHTML = "";

  const termo = busca.value.toUpperCase();

  paises.forEach(pais => {

    if(
      categoriaAtual !== "todos" &&
      pais.categoria !== categoriaAtual
    ){
      return;
    }

    if(
      !pais.nome.toUpperCase().includes(termo) &&
      !pais.sigla.includes(termo)
    ){
      return;
    }

    const button = document.createElement("button");

    button.className =
      pais.sigla === paisAtual && !modoRepetidas
        ? "aba ativa"
        : "aba";

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

  const imagem = pais.bandeira
    ? `<img class="flag-large" src="${pais.bandeira}" alt="${pais.nome}">`
    : `<div class="icon-extra">${pais.icone}</div>`;

  document.getElementById("paisFlag").innerHTML = imagem;

  document.getElementById("paisNome").innerText =
    `${pais.nome} - ${pais.sigla}`;

  document.getElementById("paisDescricao").innerText =
    `${pais.sigla}1 até ${pais.sigla}${pais.quantidade}`;

  grade.innerHTML = "";

  let tenho = 0;
  let repetidas = 0;

  for(let i = 1; i <= pais.quantidade; i++){

    const codigo = pais.sigla + i;

    const status = dados[codigo] || "faltando";

    if(status === "tenho"){
      tenho++;
    }

    if(status === "repetida"){
      tenho++;
      repetidas++;
    }

    const div = document.createElement("div");

    div.className = `figurinha ${status}`;

    let texto = "Faltando";

    if(status === "tenho"){
      texto = "Tenho";
    }

    if(status === "repetida"){
      texto = "Repetida";
    }

    div.innerHTML = `
      <strong>${codigo}</strong>
      <span>${texto}</span>
    `;

    div.onclick = () => alternarStatus(codigo);

    grade.appendChild(div);
  }

  document.getElementById("paisTenho").innerText = tenho;

  document.getElementById("paisFaltando").innerText =
    pais.quantidade - tenho;

  document.getElementById("paisRepetidas").innerText =
    repetidas;
}

function renderizarTodasRepetidas(){

  grade.innerHTML = "";

  document.getElementById("paisFlag").innerHTML =
    `<div class="icon-extra">🔁</div>`;

  document.getElementById("paisNome").innerText =
    "Todas as repetidas";

  document.getElementById("paisDescricao").innerText =
    "Aqui aparecem todas as suas repetidas juntas";

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
  document.getElementById("paisRepetidas").innerText =
    totalRepetidas;

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

  let novoStatus = "faltando";

  if(atual === "faltando"){

    novoStatus = "tenho";

    dados[codigo] = "tenho";
  }

  else if(atual === "tenho"){

    novoStatus = "repetida";

    dados[codigo] = "repetida";
  }

  else{

    novoStatus = "faltando";

    delete dados[codigo];
  }

  await salvarFigurinha(codigo, novoStatus);

  renderizarTudo();
}

async function salvarFigurinha(codigo, status){

  if(!usuarioAtual) return;

  // REMOVER
  if(status === "faltando"){

    const { error } = await supabaseClient
      .from("figurinhas")
      .delete()
      .eq("user_id", usuarioAtual.id)
      .eq("codigo", codigo);

    if(error){
      console.warn("Aviso ao remover figurinha:", error);
    }

    return;
  }

  // SALVAR
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
    console.warn("Aviso ao salvar figurinha:", error);
  }
}

function mostrarCategoria(categoria){

  categoriaAtual = categoria;

  modoRepetidas = false;

  const primeiro = paises.find(
    p => categoria === "todos" || p.categoria === categoria
  );

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
  }

  else{
    renderizarPais();
  }

  atualizarResumo();
}

async function sair(){

  await supabaseClient.auth.signOut();

  window.location.href = "login.html";
}

busca.addEventListener("input", renderizarAbas);

iniciarApp();