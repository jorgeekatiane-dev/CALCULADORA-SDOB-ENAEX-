function calcular() {
  const diametro = parseFloat(document.getElementById('diametro').value);
  const afastamento = parseFloat(document.getElementById('afastamento').value);
  const espacamento = parseFloat(document.getElementById('espacamento').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const tampao = parseFloat(document.getElementById('tampao').value);

  if (isNaN(diametro) || isNaN(afastamento) || isNaN(espacamento) || isNaN(altura) || isNaN(tampao)) {
    alert('Preencha todos os campos!');
    return;
  }

  const area = (afastamento * espacamento);
  const volume = area * (altura - tampao);
  const carga = volume * 0.9;
  const comprimentoFuro = altura;

  document.getElementById('resultado').innerHTML = `
    <h3>Resultado:</h3>
    <p><b>Área:</b> ${area.toFixed(2)} m²</p>
    <p><b>Volume:</b> ${volume.toFixed(2)} m³</p>
    <p><b>Carga Estimada:</b> ${carga.toFixed(2)} kg</p>
    <p><b>Comp. Furo:</b> ${comprimentoFuro.toFixed(2)} m</p>
  `;
}
