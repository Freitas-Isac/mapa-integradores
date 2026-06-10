/* ── CITY COORDS ─────────────────────────────────────── */
const COORDS = {
  "Jataí_GO":[-17.8783,-51.7158],"Encanto_RN":[-6.1119,-38.7153],"Promissão_SP":[-21.5361,-49.8578],
  "Betim_MG":[-19.9681,-44.1981],"Surubim_PE":[-7.8358,-35.7564],"Catalão_GO":[-18.1664,-47.9439],
  "Itabaiana_PB":[-7.3264,-35.3253],"Birigui_SP":[-21.2886,-50.3397],"Petrolina_PE":[-9.3981,-40.5028],
  "São Luiz Gonzaga_RS":[-28.4019,-54.9606],"Cabeceiras do Piauí_PI":[-3.7489,-41.5125],
  "Santos_SP":[-23.9608,-46.3336],"Várzea Grande_MT":[-15.6464,-56.1328],"Sousa_PB":[-6.7581,-38.2278],
  "Vacaria_RS":[-28.5131,-50.9358],"Araras_SP":[-22.3569,-47.3839],"Dois Irmãos_RS":[-29.5808,-51.0911],
  "Guanambi_BA":[-14.2231,-42.7814],"Palmas_TO":[-10.1833,-48.3336],"Bauru_SP":[-22.3147,-49.0608],
  "Santarém_PA":[-2.4468,-54.7081],"Tucuruí_PA":[-3.7661,-49.6728],"Guararema_SP":[-23.4136,-45.9739],
  "Natal_RN":[-5.7945,-35.2110],"Nova Petrópolis_RS":[-29.3728,-51.1158],"Barra Mansa_RJ":[-22.5443,-44.1756],
  "Campo Grande_MS":[-20.4686,-54.6218],"Manaus_AM":[-3.1190,-60.0217],"Indaial_SC":[-26.8978,-49.2317],
  "Maceió_AL":[-9.6658,-35.7350],"Niterói_RJ":[-22.8833,-43.1036],"Mococa_SP":[-21.4686,-47.0050],
  "Dois Lajeados_RS":[-28.9489,-51.9686],"Aracaju_SE":[-10.9472,-37.0731],"São Paulo_SP":[-23.5505,-46.6333],
  "Pedreiras_MA":[-4.5694,-44.6019],"Barreiras_BA":[-12.1514,-44.9908],"Cotriguaçu_MT":[-9.8603,-58.4217],
  "Arcos_MG":[-20.2783,-45.5375],"Sorocaba_SP":[-23.5015,-47.4526],"Itajaí_SC":[-26.9063,-48.6619],
  "Ariquemes_RO":[-9.9122,-63.0358],"Taió_SC":[-27.1153,-49.9986],"Ivoti_RS":[-29.6114,-51.1597],
  "Ituiutaba_MG":[-18.9672,-49.4644],"Dourados_MS":[-22.2215,-54.8058],"Teotônio Vilela_AL":[-9.9169,-36.3536],
  "Parobé_RS":[-29.6261,-50.8336],"Cuiabá_MT":[-15.5989,-56.0949],"Blumenau_SC":[-26.9194,-49.0661],
  "Recife_PE":[-8.0576,-34.8829],"Taubaté_SP":[-23.0258,-45.5556],"Foz do Iguaçu_PR":[-25.5469,-54.5882],
  "Simão Dias_SE":[-10.7378,-37.8136],"Baixo Guandu_ES":[-19.5208,-41.0186],"Mogi das Cruzes_SP":[-23.5233,-46.1861],
  "Frederico Westphalen_RS":[-27.3594,-53.3956],"Ilhéus_BA":[-14.7897,-39.0456],"Estrela_RS":[-29.4989,-51.9572],
  "Montes Claros_MG":[-16.7186,-43.8639],"Presidente Prudente_SP":[-22.1258,-51.3886],
  "Brejo do Cruz_PB":[-6.3428,-37.4953],"São Leopoldo_RS":[-29.7603,-51.1494],"Cáceres_MT":[-16.0722,-57.6789],
  "Manhuaçu_MG":[-20.2586,-42.0294],"Eunápolis_BA":[-16.3761,-39.5803],"Jaraguá do Sul_SC":[-26.4844,-49.0686],
  "Rondon do Pará_PA":[-4.7781,-48.0669],"Caxias do Sul_RS":[-29.1678,-51.1794],
  "Santa Cruz do Capibaribe_PE":[-7.9589,-36.2058],"Americana_SP":[-22.7392,-47.3319],
  "Itaipulândia_PR":[-25.1292,-54.3022],"Fortaleza_CE":[-3.7172,-38.5433],
  "Vitória da Conquista_BA":[-14.8658,-40.8442],"São Desidério_BA":[-12.3594,-44.9736],
  "Colorado_RS":[-28.5306,-52.9858],"Areia Branca_RN":[-4.9533,-37.1183],"Rondonópolis_MT":[-16.4703,-54.6356],
  "Santa Helena_PR":[-24.8692,-54.3297],"Sobral_CE":[-3.6908,-40.3497],"Olímpia_SP":[-20.7386,-48.9133],
  "Pontes e Lacerda_MT":[-15.2244,-59.3378],"Ijuí_RS":[-28.3878,-53.9136],"Guarujá_SP":[-23.9931,-46.2564],
  "Russas_CE":[-4.9419,-37.9736],"Canoas_RS":[-29.9194,-51.1836],"Carazinho_RS":[-28.2839,-52.7869],
  "Marechal Cândido Rondon_PR":[-24.5544,-54.0594],"Salgueiro_PE":[-8.0739,-39.1281],
  "Paranavaí_PR":[-23.0758,-52.4631],"Passos_MG":[-20.7178,-46.6097],"União da Vitória_PR":[-26.2281,-51.0872],
  "Cruzeiro do Sul_RS":[-29.5144,-51.9958],"Três Coroas_RS":[-29.5139,-50.7781],"Adamantina_SP":[-21.6836,-51.0769],
  "Uberlândia_MG":[-18.9186,-48.2772],"Jequié_BA":[-13.8514,-40.0822],"Joinville_SC":[-26.3044,-48.8461],
  "Governador Valadares_MG":[-18.8511,-41.9494],"Macaé_RJ":[-22.3714,-41.7869],
  "Rio Verde_GO":[-17.7981,-50.9261],"São Simão_GO":[-18.9944,-50.5472],"Crateús_CE":[-5.1692,-40.6761],
  "Juazeiro do Norte_CE":[-7.2131,-39.3150],"Piumhi_MG":[-20.4683,-45.9578],"Camaçari_BA":[-12.6997,-38.3244],
  "Boa Vista_RR":[2.8197,-60.6733],"Paulista_PE":[-7.9406,-34.8739],"Santo Cristo_RS":[-27.8319,-54.6953],
  "Caicó_RN":[-6.4583,-37.0972],"Araçatuba_SP":[-21.2097,-50.4294],"Belém_PA":[-1.4558,-48.5044],
  "Santa Cruz do Sul_RS":[-29.7178,-52.4261],"Mossoró_RN":[-5.1878,-37.3439],
  "Lucas do Rio Verde_MT":[-13.0561,-55.9128],"Santarém_PB":[-7.0000,-37.5000],
  "Upanema_RN":[-5.6564,-37.2733],"Juazeiro_BA":[-9.4178,-40.5011],"Florianópolis_SC":[-27.5969,-48.5495],
  "Cajazeiras_PB":[-6.8919,-38.5594],"Linhares_ES":[-19.3950,-40.0644],"Nova Mutum_MT":[-13.8286,-56.0808],
  "Arapiraca_AL":[-9.7522,-36.6611],"Brusque_SC":[-27.0978,-48.9178],"Rolante_RS":[-29.6508,-50.7278],
  "Santa Fé do Sul_SP":[-20.2061,-50.9289],"Nova Canaã do Norte_MT":[-10.6303,-57.7297],
  "Itacarambi_MG":[-15.0989,-44.0997],"Monte Carmelo_MG":[-18.7272,-47.4978],
  "Amargosa_BA":[-13.0372,-39.6011],"Santa Rita de Cássia_BA":[-11.0100,-44.5244],
  "Colatina_ES":[-19.5378,-40.6297],"Macapá_AP":[0.0389,-51.0664],"Rio Branco_AC":[-9.9756,-67.8111],
  "Piracicaba_SP":[-22.7253,-47.6492],"Tubarão_SC":[-28.4756,-49.0136],
  "Dias d'Ávila_BA":[-12.6128,-38.3011],"João Monlevade_MG":[-19.8072,-43.1722]
};

/* ── STATE ───────────────────────────────────────────── */
let map, burnCluster, burnPlusCluster;
let allMarkers = [];
let allData = [];
let activeFilter = 'both';

/* ── TILES ───────────────────────────────────────────── */
// We use a single OSM tile layer and invert it via CSS for dark mode.
// This avoids issues with CartoDB dark_matter tile availability.
const TILE_URL  = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
let tileLayer;

/* ── INIT MAP ────────────────────────────────────────── */
function initMap() {
  map = L.map('map', {
    center: [-15.5, -47.5],
    zoom: 5,
    zoomControl: true,
  });

  tileLayer = L.tileLayer(TILE_URL, {
    attribution: TILE_ATTR,
    maxZoom: 19,
  }).addTo(map);

  // Cluster separado por tipo — garante que Burn+ nunca some dentro de cluster laranja
  burnCluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    iconCreateFunction: (c) => makeClusterIcon(c, '#F97316'),
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
  });

  burnPlusCluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    iconCreateFunction: (c) => makeClusterIcon(c, '#8B5CF6'),
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
  });
}

function makeClusterIcon(cluster, color) {
  const n = cluster.getChildCount();
  return L.divIcon({
    html: `<div style="
      width:38px;height:38px;
      background:${color};
      color:#fff;
      border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      font-weight:800;font-size:13px;
      border:2.5px solid #fff;
      box-shadow:0 2px 10px rgba(0,0,0,.45);
    ">${n}</div>`,
    className: '',
    iconSize: [38, 38],
  });
}

/* ── MARKERS ─────────────────────────────────────────── */
function pinIcon(plano, highlight = false) {
  const isBp = plano === 'Combo - Plano Burn+';
  const fill  = isBp ? '#8B5CF6' : '#F97316';
  const ring  = highlight ? `box-shadow:0 0 0 5px ${fill}44,0 2px 10px rgba(0,0,0,.5)` : 'box-shadow:0 2px 6px rgba(0,0,0,.45)';
  const size  = highlight ? 18 : 13;
  return L.divIcon({
    html: `<div style="
      width:${size}px;height:${size}px;
      background:${fill};
      border:2.5px solid #fff;
      border-radius:50%;
      ${ring};
    "></div>`,
    className: '',
    iconSize:   [size, size],
    iconAnchor: [size/2, size/2],
  });
}

function buildMarkers(data) {
  burnCluster.clearLayers();
  burnPlusCluster.clearLayers();
  allMarkers = [];

  data.forEach(d => {
    const key = `${d.cidade}_${d.estado}`;
    const c = COORDS[key];
    if (!c) return;

    const jit = () => (Math.random() - .5) * .07;
    const marker = L.marker([c[0] + jit(), c[1] + jit()], {
      icon: pinIcon(d.plano),
    });

    const isBp = d.plano === 'Combo - Plano Burn+';
    const badgeCls = isBp ? 'badge badge-burnp' : 'badge badge-burn';
    const badgeTxt = isBp ? '⚡ Burn+' : '🔥 Burn';

    marker.bindPopup(`
      <div class="popup-body">
        <div class="popup-badge"><span class="${badgeCls}">${badgeTxt}</span></div>
        <div class="popup-name">${d.nome}</div>
        <div class="popup-loc">📍 ${d.cidade} — ${d.estado}</div>
        <button class="popup-btn" onclick="openDetail(${d.id})">Ver detalhes →</button>
      </div>
    `, { maxWidth: 250, closeButton: true });

    marker.on('click', () => openDetail(d.id));
    marker._did  = d.id;
    marker._plan = d.plano;
    marker._city = d.cidade.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

    if (isBp) {
      burnPlusCluster.addLayer(marker);
    } else {
      burnCluster.addLayer(marker);
    }

    allMarkers.push(marker);
  });

  applyFilter();
}

/* ── FILTER ──────────────────────────────────────────── */
function applyFilter() {
  const showBurn  = activeFilter === 'burn'  || activeFilter === 'both';
  const showBurnP = activeFilter === 'burnplus' || activeFilter === 'both';

  if (showBurn)  { if (!map.hasLayer(burnCluster))     map.addLayer(burnCluster); }
  else           { if (map.hasLayer(burnCluster))      map.removeLayer(burnCluster); }

  if (showBurnP) { if (!map.hasLayer(burnPlusCluster)) map.addLayer(burnPlusCluster); }
  else           { if (map.hasLayer(burnPlusCluster))  map.removeLayer(burnPlusCluster); }

  const visible = allMarkers.filter(m =>
    (showBurn  && m._plan === 'Combo - Plano Burn') ||
    (showBurnP && m._plan === 'Combo - Plano Burn+')
  ).length;
  document.getElementById('sv').textContent = visible;
}

/* ── DETAIL PANEL ────────────────────────────────────── */
function openDetail(id) {
  const d = allData.find(x => x.id === id);
  if (!d) return;
  const isBp = d.plano === 'Combo - Plano Burn+';
  const badgeCls = isBp ? 'badge badge-burnp' : 'badge badge-burn';
  const badgeTxt = isBp ? '⚡ Combo - Plano Burn+' : '🔥 Combo - Plano Burn';

  document.getElementById('detail').innerHTML = `
    <div class="int-card">
      <div class="int-card-head">
        <h2>${d.nome}</h2>
        <span class="${badgeCls}">${isBp ? 'Burn+' : 'Burn'}</span>
      </div>
      <div class="int-card-body">
        <div class="info-row">
          <div class="info-ico">🆔</div>
          <div class="info-content">
            <div class="info-lbl">ID do Integrador</div>
            <div class="info-val mono">#${d.id}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">🏷️</div>
          <div class="info-content">
            <div class="info-lbl">Plano</div>
            <div class="info-val">${badgeTxt}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">📍</div>
          <div class="info-content">
            <div class="info-lbl">Cidade / Estado</div>
            <div class="info-val">${d.cidade} — ${d.estado}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">📅</div>
          <div class="info-content">
            <div class="info-lbl">Data de Criação</div>
            <div class="info-val">${fmtDate(d.createdAt)}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">👤</div>
          <div class="info-content">
            <div class="info-lbl">Consultor</div>
            <div class="info-val">${d.consultor || 'N/D'}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">⚡</div>
          <div class="info-content">
            <div class="info-lbl">Total de Usinas</div>
            <div class="info-val">${fmtN(d.totalUsinas)}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">🔆</div>
          <div class="info-content">
            <div class="info-lbl">Potência Total</div>
            <div class="info-val">${fmtKwp(d.totalPotenciaKwp)}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── UTILS ───────────────────────────────────────────── */
function fmtDate(s) {
  if (!s) return 'N/D';
  const [y, m, d] = s.split('-');
  return `${d}/${m}/${y}`;
}
function fmtN(v)   { return v != null ? Number(v).toLocaleString('pt-BR') : 'N/D'; }
function fmtKwp(v) { return v != null ? Number(v).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' kWp' : 'N/D'; }

function normalize(s) {
  return s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

/* ── SEARCH ──────────────────────────────────────────── */
const cityInput = document.getElementById('city-input');
const clearBtn  = document.getElementById('search-clear');
const toast     = document.getElementById('city-toast');
let toastTimer;

cityInput.addEventListener('input', () => {
  clearBtn.style.display = cityInput.value ? 'block' : 'none';
});
cityInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
clearBtn.addEventListener('click', () => {
  cityInput.value = '';
  clearBtn.style.display = 'none';
  allMarkers.forEach(m => m.setIcon(pinIcon(m._plan, false)));
  hideToast();
});

function doSearch() {
  const q = normalize(cityInput.value.trim());
  if (!q) return;

  const showBurn  = activeFilter === 'burn'  || activeFilter === 'both';
  const showBurnP = activeFilter === 'burnplus' || activeFilter === 'both';
  const matches = allMarkers.filter(m => {
    if (!m._city.includes(q)) return false;
    if (showBurn  && m._plan === 'Combo - Plano Burn')  return true;
    if (showBurnP && m._plan === 'Combo - Plano Burn+') return true;
    return false;
  });

  // reset all icons
  allMarkers.forEach(m => m.setIcon(pinIcon(m._plan, false)));

  if (!matches.length) {
    showToast(`Nenhum resultado para "${cityInput.value}"`, true);
    return;
  }

  // highlight matched markers
  matches.forEach(m => m.setIcon(pinIcon(m._plan, true)));

  // pan to centroid
  const lats = matches.map(m => m.getLatLng().lat);
  const lngs = matches.map(m => m.getLatLng().lng);
  const lat  = lats.reduce((a, b) => a + b) / lats.length;
  const lng  = lngs.reduce((a, b) => a + b) / lngs.length;
  map.setView([lat, lng], matches.length === 1 ? 11 : 8, { animate: true });

  if (matches.length === 1) {
    openDetail(matches[0]._did);
    setTimeout(() => matches[0].openPopup(), 500);
  }

  const label = activeFilter === 'both' ? '' : activeFilter === 'burnplus' ? ' (Burn+)' : ' (Burn)';
  showToast(`${matches.length} integrador${matches.length > 1 ? 'es' : ''} em "${cityInput.value}"${label}`, false);
}

function showToast(msg, err) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.style.borderColor = err ? '#EF4444' : '#F97316';
  toast.style.display = 'block';
  toastTimer = setTimeout(hideToast, 4000);
}
function hideToast() { toast.style.display = 'none'; }

/* ── FILTER BUTTONS ──────────────────────────────────── */
document.querySelectorAll('.btn-f').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.btn-f').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.f;
    applyFilter();
    resetDetail();
    allMarkers.forEach(m => m.setIcon(pinIcon(m._plan, false)));
  });
});

function resetDetail() {
  document.getElementById('detail').innerHTML = `
    <div class="empty-state" id="empty">
      <div class="empty-ico">📍</div>
      <p>Clique em um marcador<br>para ver os detalhes.</p>
    </div>`;
}

/* ── THEME ───────────────────────────────────────────── */
document.getElementById('theme-btn').addEventListener('click', () => {
  const isDark = document.body.dataset.theme === 'dark';
  document.body.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('theme-btn').textContent = isDark ? '🌙' : '☀️';
});

/* ── BOOT ────────────────────────────────────────────── */
async function boot() {
  initMap();
  try {
    const res  = await fetch('/data.json');
    const json = await res.json();
    if (!json.ok) throw new Error(json.error);

    allData = json.data;
    buildMarkers(allData);

    const burn  = allData.filter(d => d.plano === 'Combo - Plano Burn').length;
    const burnp = allData.filter(d => d.plano === 'Combo - Plano Burn+').length;
    document.getElementById('sb').textContent = burn;
    document.getElementById('sp').textContent = burnp;
    document.getElementById('st').textContent = allData.length;
  } catch (e) {
    console.error(e);
    showToast('Erro ao carregar dados: ' + e.message, true);
  }
  document.getElementById('loading').classList.add('gone');
}

boot();
