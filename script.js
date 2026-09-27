function generarInforme() {
    // 1. Capturar los datos iniciales (Código y PH/No PH)
    const codigo = document.getElementById('codigoInforme').value;
    const tipo = document.getElementById('tipoPlantilla').value;
    
    // 2. Capturar el resto de datos
    const solicitante = document.getElementById('solicitante').value;
    const fechaAvaluo = document.getElementById('fechaAvaluo').value;
    const avaluador = document.getElementById('avaluador').value;
    const registroRAA = document.getElementById('registroRAA').value;
    const direccion = document.getElementById('direccion').value;
    const barrio = document.getElementById('barrio').value;
    const localidad = document.getElementById('localidad').value;
    const municipio = document.getElementById('municipio').value;
    const valorComercial = document.getElementById('valorComercial').value;
    const areaTerreno = document.getElementById('areaTerreno').value;
    const areaConstruida = document.getElementById('areaConstruida').value;

    // 3. Lógica para saber si es PH o No PH (puedes cambiar los textos según lo necesites)
    let tituloInforme = `INFORME DE AVALÚO COMERCIAL No. ${codigo}`;
    let subtitulo = tipo === 'PH' ? 'Propiedad Horizontal' : 'No Propiedad Horizontal';

    // 4. Generar el HTML del informe (Aquí armamos el texto final)
    const informeHTML = `
        <h3>${tituloInforme}</h3>
        <p><strong>Tipo:</strong> ${subtitulo}</p>
        <hr>
        <p><strong>Respetado:</strong> ${solicitante}</p>
        <p><strong>Asunto:</strong> Entrega de información al uso comercial urbano</p>
        <p>De acuerdo con el acuerdo recibido, presentamos el informe al uso comercial del inmueble dado catastralmente en la ${direccion}, barrio ${barrio}, Localidad ${localidad} del municipio de ${municipio}.</p>
        
        <h4>VALOR COMERCIAL DEL INMUEBLE:</h4>
        <p>CIEN MILLONES DOSCIENTOS DIECINUEVE MIL SETECIENTOS PESOS MONEDA CORRIENTE COLOMBIANA ($${valorComercial}).</p>
        
        <h4>Áreas:</h4>
        <ul>
            <li>Área de terreno: ${areaTerreno} m²</li>
            <li>Área construida: ${areaConstruida} m²</li>
        </ul>
        
        <h4>Fechas y Responsables:</h4>
        <p>Fecha de avalúo: ${fechaAvaluo}</p>
        <p>Avaluador: ${avaluador} - Registro RAA: ${registroRAA}</p>
    `;

    // 5. Mostrar el resultado en pantalla
    document.getElementById('contenidoInforme').innerHTML = informeHTML;
    document.getElementById('resultado').style.display = 'block';
}

function descargarPDF() {
    const contenido = document.getElementById('contenidoInforme').innerHTML;
    const ventana = window.open('', '', 'height=700,width=800');
    ventana.document.write('<html><head><title>Informe de Avalúo</title>');
    ventana.document.write('<style>body { font-family: Arial, sans-serif; padding: 20px; }</style>');
    ventana.document.write('</head><body>');
    ventana.document.write(contenido);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.print();
}
