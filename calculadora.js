document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const D = parseFloat(document.getElementById('diametro').value);
    const B = parseFloat(document.getElementById('afastamento').value);
    const S = parseFloat(document.getElementById('espacamento').value);
    const H = parseFloat(document.getElementById('altura').value);
    const T = parseFloat(document.getElementById('tampao').value);

    const F = parseFloat(document.getElementById('fator').value);
    const densRocha = parseFloat(document.getElementById('densRocha').value);
    const densExpl = parseFloat(document.getElementById('densExpl').value);

    // Cálculos básicos
    const area = (Math.PI * Math.pow(D/1000, 2)) / 4;
    const volume = area * H;
    const compFuro = H - T;
    const compCarga = compFuro * 0.8;

    // 1. Cálculo pela densidade da rocha
    const volumeRocha = compCarga * B * S;
    const cargaPelaRocha = (volumeRocha * F * densRocha) / compCarga;

    // 2. Cálculo pelo volume do furo x densidade do explosivo
    const areaFuro = 3.1416 * Math.pow(D/1000, 2) / 4;
    const cargaPeloExplosivo = areaFuro * densExpl * 1000;

    // Pega o menor valor - limitação do furo ou da rocha
    const cargaEstimada = Math.min(cargaPelaRocha, cargaPeloExplosivo);

    const totalPorFuro = cargaEstimada * compCarga;
    const sdob = B / Math.pow(cargaEstimada, 0.33);
    const lancamento = B * 25;
    const cargaPorMetro = totalPorFuro / compFuro;

    // CONVERSÃO PRA POLEGADAS
    const D_pol = (D / 25.4).toFixed(2);
    const B_pol = (B * 3.28084).toFixed(2);
    const S_pol = (S * 3.28084).toFixed(2);
    const H_pol = (H * 3.28084).toFixed(2);

    // Mostra resultados
    document.getElementById('resultado').innerHTML = `
        <h3>Resultados</h3>
        <p><b>Diâmetro:</b> ${D} mm = ${D_pol}"</p>
        <p><b>Malha:</b> ${B} x ${S} m = ${B_pol} x ${S_pol} ft</p>
        <p><b>Altura do Banco:</b> ${H} m = ${H_pol} ft</p>
        <p><b>Comprimento do Furo:</b> ${compFuro.toFixed(2)} m</p>
        <p><b>Comprimento de Carga:</b> ${compCarga.toFixed(2)} m</p>
        <hr>
        <p><b>Carga Estimada:</b> ${cargaEstimada.toFixed(2)} kg/m</p>
        <p><b>Total por Furo:</b> ${totalPorFuro.toFixed(2)} kg</p>
        <p><b>Carga por Metro de Furo:</b> ${cargaPorMetro.toFixed(2)} kg/m</p>
        <p><b>SDOB:</b> ${sdob.toFixed(2)}</p>
        <p><b>Lançamento:</b> ${lancamento.toFixed(2)} m</p>
    `;
});
