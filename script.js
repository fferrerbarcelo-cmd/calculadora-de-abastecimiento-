
// 🍿 EXERCISE 1: LIFETIME SNACK CALCULATOR

function calcularSnacks() {

    // Get the values from the inputs
    let edadActual = Number(document.getElementById("edad").value);
    let edadMaxima = Number(document.getElementById("edadMaxima").value);
    let snackFavorito = document.getElementById("snack").value.trim();
    let snacksPorDia = Number(document.getElementById("snacksDia").value);
    let precioPorSnack = Number(document.getElementById("precio").value);

    // Validate the information
    if (
        edadActual < 0 ||
        edadMaxima <= edadActual ||
        !snackFavorito ||
        snacksPorDia < 0 ||
        precioPorSnack < 0
    ) {
        alert("Please enter valid information!");
        return;
    }

    // Calculate the lifetime supply
    let añosRestantes = edadMaxima - edadActual;
    let cantidadFinal = Math.ceil(añosRestantes * 365 * snacksPorDia);

    // Calculate the total cost
    let gastoTotal = cantidadFinal * precioPorSnack;

    // Format the numbers
    let formato = new Intl.NumberFormat("es-AR");

    // Display the results
    let resultado = document.getElementById("resultadoSnacks");

    resultado.innerHTML = `
        <p>YOUR LIFETIME SNACK SUPPLY</p>
        <h3>${formato.format(cantidadFinal)} snacks 🍟</h3>
        <p>Necesitarás <strong>${formato.format(cantidadFinal)} de ${snackFavorito}</strong> para que te alcancen hasta los ${edadMaxima} años.</p>
        <p>Years remaining: <strong>${añosRestantes}</strong></p>
        <p>Total lifetime cost: <strong>$${formato.format(gastoTotal)}</strong></p>
    `;

    resultado.classList.add("show");
}


// ✈️ EXERCISE 2: TRAVEL BUDGET CALCULATOR

function calcularViaje() {

    // Get the values from the inputs
    let diasDeViaje = Number(document.getElementById("dias").value);
    let presupuestoMaximo = Number(document.getElementById("presupuesto").value);
    let comidasPorDia = Number(document.getElementById("comidasDia").value);

    // Validate the information
    if (
        diasDeViaje <= 0 ||
        presupuestoMaximo < 0 ||
        comidasPorDia <= 0
    ) {
        alert("Please enter valid information!");
        return;
    }

    // Calculate total meals
    let comidasTotales = diasDeViaje * comidasPorDia;

    // Calculate money per meal
    let dineroPorComida = presupuestoMaximo / comidasTotales;

    // Format the result
    let formato = new Intl.NumberFormat("es-AR", {
        maximumFractionDigits: 2
    });

    // Display the results
    let resultado = document.getElementById("resultadoViaje");

    resultado.innerHTML = `
        <p>YOUR TRAVEL BUDGET</p>
        <h3>$${formato.format(dineroPorComida)}</h3>
        <p>Podés gastar <strong>$${formato.format(dineroPorComida)}</strong> en cada comida para que te alcance la plata durante los ${diasDeViaje} días de viaje.</p>
        <p>Total meals: <strong>${comidasTotales}</strong></p>
        <p>Total budget: <strong>$${formato.format(presupuestoMaximo)}</strong></p>
    `;

    resultado.classList.add("show");
}
