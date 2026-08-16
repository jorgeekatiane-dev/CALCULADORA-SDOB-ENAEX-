<script>
let dadosResultado = {};

function toFloat(valor) { 
  return parseFloat(valor.toString().replace(',', '.')); 
}

document.getElementById('calcForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const d = toFloat(document.getElementById('diametro').value);
  const B = toFloat(document.getElementById('afastamento').value);
  const S = toFloat(document.getElementById('espacamento').value);
  const H = toFloat(document.getElementById('altura').value);
  const T = toFloat(document.getElementById('tampao').value);
  const densRocha = toFloat(document.getElementById('densRocha').value);
  const densExpl = toFloat(document.getElementById('densExpl').value);
  
  const pol = (d / 25.4).toFixed(2);
  const comprimentoFuro = H;
  const comprimentoCarga = H - T;
  
  // FÓRMULA CORRIGIDA - Multiplica por 1000 nos 2
  const cargaRocha = 0.785 * Math.pow(d/1000, 2) * densRocha * 1000;
  const cargaExpl = 0.785 * Math.pow(d/1000, 2) * densExpl * 1000;
  
  const carga = Math.min(cargaRocha, cargaExpl);
  const total = carga * comprimentoCarga;
  const cargaPorMetro = total / comprimentoFuro;
  const sdob = B / Math.pow(carga, 0.33);
  
  // LANÇAMENTO CORRIGIDO - Padrão ENAEX 18xB
  const lancamento = 18 * B;
  
  dadosResultado = {d, pol, B, S, H, comprimento
