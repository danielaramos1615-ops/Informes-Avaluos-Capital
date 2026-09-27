function generarInforme() {
    // 1. Capturar todos los datos
    const codigo = document.getElementById('codigoInforme').value;
    const tipo = document.getElementById('tipoPlantilla').value;
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
    const propietario = document.getElementById('propietario').value;
    const estrato = document.getElementById('estrato').value;
    const viaAcceso = document.getElementById('viaAcceso').value;

    // 2. Lógica para el tipo de plantilla
    let tituloPlantilla = tipo === 'PH' ? 'INFORME DE AVALÚO COMERCIAL No. ' + codigo + ' (Propiedad Horizontal)' : 'INFORME DE AVALÚO COMERCIAL No. ' + codigo;

    // 3. Construir el HTML del documento (Estructura de la plantilla Word)
    // Usamos <div style="page-break-after: always;"> para simular los saltos de página de Word
    let informeHTML = `
        <!-- PAGE 1 -->
        <div style="page-break-after: always; text-align: center; font-family: Arial, sans-serif;">
            <h1 style="font-size: 24pt;">AVALÚO COMERCIAL URBANO</h1>
            <h2 style="font-size: 18pt;">${tituloPlantilla}</h2>
            <br><br>
            <p style="text-align: left; font-size: 12pt;"><strong>• TIPO DE INMUEBLE.</strong> Casa residencial urbana.</p>
            <p style="text-align: left; font-size: 12pt;"><strong>• DIRECCIÓN.</strong> ${direccion}.</p>
            <p style="text-align: left; font-size: 12pt;"><strong>• SECTOR CATASTRAL / LOCALIDAD.</strong> ${barrio} / ${localidad}.</p>
            <p style="text-align: left; font-size: 12pt;"><strong>• MUNICIPIO.</strong> ${municipio}.</p>
            <p style="text-align: left; font-size: 12pt;"><strong>• ENCARGO VALUATORIO.</strong></p>
            <br><br>
            <!-- NOTA: Aquí puedes insertar la imagen de la fachada si la tienes en tu repositorio -->
            <!-- <img src="URL_DE_TU_IMAGEN_EN_GITHUB" style="width: 100%; max-width: 600px;"> -->
        </div>

        <!-- PAGE 2 -->
        <div style="page-break-after: always; font-family: Arial, sans-serif; font-size: 12pt;">
            <p><strong>Respetado:</strong> ${solicitante}</p>
            <p><strong>Asunto:</strong> Entrega de información al uso comercial urbano</p>
            <p>De acuerdo con el acuerdo recibido, presentamos el informe al uso comercial del inmueble dado catastralmente en la ${direccion}, barrio ${barrio}, Localidad ${localidad} del municipio de ${municipio}.</p>
            <p>El estudio fue elaborado con base en la documentación aportada, la información obtenida durante la visita técnica, las condiciones físicas y jurídicas identificadas y el análisis del estado inmobiliario correspondiente.</p>
            <p>Para la detección del valor comercial del uso de los edificios de comparación de mercado de costo, de acuerdo con las características del inmueble y la información disponible, conforme a la Resolución de 2026 del Instituto Geográfico Técnico (IG) de Anexo Técnico, 1673 de 2013 y demás disposiciones aplicables a la actividad valuatoria.</p>
            <p>Durante la visita se realizó el reconocimiento del inmueble, el registro fotográfico, verificación de sus condiciones y de conservación, así como la toma de medidas de cotejo, para el desarrollo del análisis valuatorio.</p>
            
            <h3 style="text-align: center;">VALOR COMERCIAL DEL INMUEBLE:</h3>
            <p>Con fundamento en la información documental disponible, las condiciones físicas observadas durante la visita técnica, el análisis del mercado inmobiliario y los métodos valuatorios aplicados, se determina que el valor comercial del inmueble objeto de estudio asciende a la suma de:</p>
            <p style="text-align: center; font-weight: bold; font-size: 14pt;">CIEN MILLONES DOSCIENTOS DIECINUEVE MIL SETECIENTOS PESOS MONEDA CORRIENTE COLOMBIANA ($${valorComercial}).</p>
        </div>

        <!-- PAGE 3 (Tabla de contenido y consideraciones) -->
        <div style="page-break-after: always; font-family: Arial, sans-serif; font-size: 12pt;">
            <h2 style="text-align: center;">TABLA DE CONTENIDO</h2>
            <ol>
                <li>INFORMACIÓN GENERAL DEL ENCARGO VALUATORIO</li>
                <li>IDENTIFICACIÓN Y LOCALIZACIÓN DEL INMUEBLE</li>
                <li>DESCRIPCIÓN DEL SECTOR, ACCESIBILIDAD Y ENTORNO</li>
                <li>DESCRIPCIÓN DEL ENTORNO O SECTOR</li>
                <li>DESCRIPCIÓN DEL INMUEBLE</li>
                <li>ÁREAS VERIFICADAS EN VISITA DE INSPECCIÓN</li>
                <li>EDAD, VIDA ÚTIL Y ESTADO DE CONSERVACIÓN</li>
                <li>DISTRIBUCIÓN Y DEPENDENCIAS</li>
                <li>MATERIALES Y ACABADOS</li>
                <li>DOCUMENTACIÓN Y FUENTES CONSULTADAS</li>
                <li>VERIFICACIÓN Y CORRESPONDENCIA DE DIRECCIONES</li>
                <li>INFORMACIÓN CATASTRAL DEL INMUEBLE</li>
                <li>INFORMACIÓN JURÍDICA DEL INMUEBLE</li>
                <li>ANOTACIONES, GRAVÁMENES Y LIMITACIONES</li>
                <li>NORMATIVIDAD URBANÍSTICA APLICABLE</li>
                <li>CONSIDERACIONES FINALES</li>
                <li>REVISIÓN DEL COMITÉ DE AVALUADORES</li>
                <li>DECLARACIÓN DE INDEPENDENCIA E IMPARCIALIDAD</li>
                <li>IDONEIDAD PROFESIONAL</li>
                <li>CONFIDENCIALIDAD Y USO DEL INFORME</li>
            </ol>
            <p style="text-align: center; font-size: 10pt;">EDIFICIO OSAKA TRADE CENTER, OFICINA 508-1, CALLE 74 NO. 15-80 BOGOTÁ D.C. INFO@AVALUOSCAPITAL.COM - CEL: 3227852669.</p>
        </div>

        <!-- PAGE 4 (Información General - Tabla) -->
        <div style="page-break-after: always; font-family: Arial, sans-serif; font-size: 12pt;">
            <h2>1. INFORMACIÓN GENERAL DEL ENCARGO VALUATORIO</h2>
            <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                <tr><td><strong>Aspecto</strong></td><td><strong>Información</strong></td></tr>
                <tr><td>Tipo de avalúo</td><td>Aerial urbano</td></tr>
                <tr><td>Tipo de inmueble</td><td>Casa.</td></tr>
                <tr><td>Uso actual</td><td>Residencial.</td></tr>
                <tr><td>Fecha de avalúo</td><td>${fechaAvaluo}</td></tr>
                <tr><td>Avaluador</td><td>${avaluador}</td></tr>
                <tr><td>Número de registro RAA</td><td>${registroRAA}</td></tr>
            </table>

            <h2>2. IDENTIFICACIÓN Y LOCACIÓN DE LA VALUACIÓN</h2>
            <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                <tr><td><strong>Aspecto</strong></td><td><strong>Información</strong></td></tr>
                <tr><td>Departamento</td><td>Cundinamarca.</td></tr>
                <tr><td>Municipio</td><td>${municipio}</td></tr>
                <tr><td>Barrio</td><td>${barrio}</td></tr>
                <tr><td>Localidad</td><td>${localidad}</td></tr>
            </table>
        </div>

        <!-- PAGE 5 (Áreas verificadas) -->
        <div style="page-break-after: always; font-family: Arial, sans-serif; font-size: 12pt;">
            <h2>4. ÁREAS VERIFICADAS EN VISITA DE INSPECCIÓN</h2>
            <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                <tr><td><strong>Unidad o nivel</strong></td><td><strong>Área verificada m²</strong></td></tr>
                <tr><td>Piso 1</td><td>${areaConstruida} m²</td></tr>
                <tr><td>Piso 2</td><td>-</td></tr>
                <tr><td>Área total verificada</td><td>${areaConstruida} m²</td></tr>
                <tr><td>Área de terreno</td><td>${areaTerreno} m²</td></tr>
            </table>
            <p><em>Las mediciones realizadas durante la visita tienen carácter aproximado y se realizaron únicamente como elemento de cotejo para fines valuatorios.</em></p>
            
            <h2>7. EDAD, VIDA ÚTIL Y ESTADO DE CONSERVACIÓN</h2>
            <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                <tr><td><strong>Unidad constructiva</strong></td><td><strong>Edad aproximada</strong></td><td><strong>Vida útil</strong></td><td><strong>Observación</strong></td></tr>
                <tr><td>Casa</td><td>100 años</td><td>100 años</td><td>Vetustez suministrada por el interesado.</td></tr>
            </table>
        </div>

        <!-- PAGE 6 (Materiales y acabados) -->
        <div style="page-break-after: always; font-family: Arial, sans-serif; font-size: 12pt;">
            <h2>9. MATERIALES Y ACABADOS</h2>
            <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                <tr><td><strong>Aspecto</strong></td><td><strong>Descripción</strong></td></tr>
                <tr><td>Cubierta</td><td>Cubierta en tejido, momento sobre la metálica o de madera, con sector de la teja traslúcida para iluminación natural.</td></tr>
                <tr><td>Fachada</td><td>Fachada en mampostería revocada, estucada y pintada, con zócalo o sectores revestidos en enchape cerámico.</td></tr>
            </table>
        </div>

        <!-- PAGE 7 (Información Catastral y Jurídica) -->
        <div style="page-break-after: always; font-family: Arial, sans-serif; font-size: 12pt;">
            <h2>12. INFORMACIÓN CATASTRAL DEL INMUEBLE</h2>
            <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                <tr><td><strong>Aspecto catastral</strong></td><td><strong>Información</strong></td></tr>
                <tr><td>Círculo</td><td>50C - Zona centro / 50S - Zona sur</td></tr>
                <tr><td>CHIP</td><td>AAA0013DDUD</td></tr>
                <tr><td>Avalúo catastral</td><td>$196-157.000</td></tr>
                <tr><td>Año de vigencia</td><td>31-Dic-2026</td></tr>
            </table>

            <h2>13. INFORMACIÓN JURÍDICA DEL INMUEBLE</h2>
            <p><em>Esta revisión es de carácter básico y documental, por lo tanto, no constituye un estudio de títulos.</em></p>
            <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                <tr><td><strong>Propietario (s)</strong></td><td>${propietario}</td></tr>
            </table>
        </div>

        <!-- PAGE 8 (Consideraciones finales y cierre) -->
        <div style="page-break-after: always; font-family: Arial, sans-serif; font-size: 12pt;">
            <h2>16. CONSIDERACIONES FINALES</h2>
            <p>El presente informe fue elaborado con base en la documentación suministrada por el solicitante, la información obtenida durante la visita técnica, las consultas realizadas en fuentes oficiales y el análisis de las condiciones físicas, jurídicas, catastrales, urbanísticas y comerciales del inmueble.</p>
            <p>Las áreas, características constructivas, materiales, acabados y estado de conservación corresponden a lo observado durante la inspección y a la información disponible para el desarrollo del encargo. Cuando algún dato no pudo ser verificado directamente, se dejó indicada su fuente o la limitación correspondiente.</p>
            <p>Las mediciones realizadas durante la visita fueron utilizadas únicamente como elemento de cotejo para fines valuatorios. Por tanto, no constituyen un levantamiento arquitectónico o topográfico, ni reemplazan trámites oficiales de reconocimiento, actualización o rectificación de áreas y linderos.</p>
            
            <h2>18. DECLARACIÓN DE INDEPENDENCIA E IMPARCIALIDAD</h2>
            <p>Los ciudadanos que intervienen en la elaboración y revisión del presente informe actuaron con independencia, objetividad e imparcialidad, y no tienen interés directo o indirecto en el inmueble, en su posible negociación ni en el resultado del avalúo.</p>
            <p>Los honorarios profesionales fueron independientes y no están condicionados al valor de cada uno, a la aceptación del informe por parte del solicitante, resultado de su negociación, trabajos de actuación posterior.</p>

            <br><br><br>
            <p>Cordialmente,</p>
            <br><br>
            <p>_________________________________</p>
            <p><strong>Edwin Andrés Bustos Moya</strong></p>
            <p>Avaluador</p>
            <br>
            <p style="text-align: center; font-size: 10pt;">EDIFICIO OSAKA TRADE CENTER, OFICINA 508-1, CALLE 74 NO. 15-80 BOGOTÁ D.C. INFO@AVALUOSCAPITAL.COM - CEL: 3227852669.</p>
        </div>
    `;

    // 4. Guardar el HTML generado en un div oculto o variable global para la descarga
    window.contenidoInforme = informeHTML;
    
    // 5. Mostrar mensaje de éxito y descargar automáticamente
    document.getElementById('resultado').style.display = 'block';
    descargarWord();
}

function descargarWord() {
    if (!window.contenidoInforme) {
        alert("Primero debes generar el informe.");
        return;
    }

    // Estructura HTML compatible con Word
    const header = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word' 
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
            <meta charset='utf-8'>
            <title>Informe de Avalúo</title>
            <style>
                body { font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.5; }
                h1, h2, h3 { color: #000; }
                table { border-collapse: collapse; width: 100%; margin-bottom: 15px; }
                th, td { border: 1px solid #000; padding: 8px; text-align: left; }
                .page-break { page-break-after: always; }
            </style>
        </head>
        <body>
    `;
    const footer = "</body></html>";
    
    // Unir todo
    const sourceHTML = header + window.contenidoInforme + footer;
    
    // Crear el archivo Blob (Word)
    // El \ufeff es un BOM (Byte Order Mark) para que Word reconozca los acentos y caracteres especiales correctamente
    const blob = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
    
    // Crear enlace de descarga
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Informe_Avaluo_' + document.getElementById('codigoInforme').value + '.doc';
    
    // Simular clic
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
