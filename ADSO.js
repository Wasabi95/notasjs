function calcularNota() {
    const nombre = document.getElementById('nombre').value.trim(); 
    const producto1 = parseFloat(document.getElementById('producto1').value);
    const producto2 = parseFloat(document.getElementById('producto2').value);
    const producto3 = parseFloat(document.getElementById('producto3').value);
    const desempeno1 = parseFloat(document.getElementById('desempeno1').value);
    const desempeno2 = parseFloat(document.getElementById('desempeno2').value);
    const conocimiento = parseFloat(document.getElementById('conocimiento').value);

    // Check if any field is empty or not a number
    if (nombre === '' || isNaN(producto1) || isNaN(producto2) || isNaN(producto3) ||
        isNaN(desempeno1) || isNaN(desempeno2) || isNaN(conocimiento)) {
        toastr.error('Por favor, complete todos los campos antes de calcular la nota.');
        return;
    }

    // Check if any grade is outside the 1-10 range
    const notas = [producto1, producto2, producto3, desempeno1, desempeno2, conocimiento];
    if (notas.some(nota => nota < 1 || nota > 10)) {
        toastr.error('Por favor, ingrese todas las notas en el rango de 1 a 10.');
        return;
    }

    const promedioProducto = (producto1 + producto2 + producto3) / 3;
    const promedioDesempeno = (desempeno1 + desempeno2) / 2;

    const notaProducto = promedioProducto * 0.4;
    const notaDesempeno = promedioDesempeno * 0.3;
    const notaConocimiento = conocimiento * 0.3;

    const notaDefinitiva = notaProducto + notaDesempeno + notaConocimiento;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h4>Resultado</h4>
        <p>Nota definitiva: ${notaDefinitiva.toFixed(2)}</p>
        <p>${notaDefinitiva >= 7 ? 'Aprobó' : 'Reprobó'}</p>
    `;

    toastr.success(`Nota definitiva calculada: ${notaDefinitiva.toFixed(2)}`);
    if (notaDefinitiva >= 7) {
        toastr.success('¡Felicidades! Aprobaste.');
    } else {
        toastr.warning('Lo siento, reprobaste.');
    }
}

function limpiarFormulario() {
    document.getElementById('notasForm').reset();
    document.getElementById('resultado').innerHTML = '';
    toastr.info('Formulario limpiado.');
}
