document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const d = parseFloat(document.getElementById('diametro').value) / 1000; // mm pra m
    const B = parseFloat(document.getElementById('afastamento').value);
    const S = parseFloat(document.getElementById('espacamento').value);
    const H = parseFloat(document.getElementById('altura').value);
    const tampao = parseFloat(document.getElementById('tampao').value);
    const densidade = 0.9; // Densidade do explosivo kg/dm³ - ajusta se precisar

    const area = B * S;
    const compFuro = H;
    const compCarga = compFuro - tampao;
    const volume = area * compFuro;
    
    // Volume do furo
    const volFuro = (Math.PI * Math.pow(d,2) / 4) * compCarga;
    const carga = volFuro * densidade * 1000; // kg

    // SDOB - Escala de Distância Reduzida
    const sdob = B / Math.sqrt(carga);

    // Lançamento - fórmula padrão Enaex: L = 20 * B * (B/S)^0.5
    const lancamento = 20 * B * Math.sqrt(B / S);

    document.getElementById('resultado').innerHTML = `
        <h3>Resultado:</h3>
        <p><b>Área:</b> ${area.toFixed(2)} m²</p>
        <p><b>Volume:</b> ${volume.toFixed(2)} m³</p>
        <p><b>Comp. Furo:</b> ${compFuro.toFixed(2)} m</p>
        <p><b>Comp. Carga:</b> ${compCarga.toFixed(2)} m</p>
        <p><b>Carga Estimada:</b> ${carga.toFixed(2)} kg</p>
        <p><b>SDOB:</b> ${sdob.toFixed(2)} m/kg^0.5</p>
        <p><b>Lançamento:</b> ${lancamento.toFixed(2)} m</p>
    `;
});
