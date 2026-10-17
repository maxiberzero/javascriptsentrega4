

const viandasDisponibles = [
    "Pollo",
    "Vegetariana",
    "Carne",
    "Ensalada",
    "Milanesa"
];


viandasDisponibles.push("Tarta");
viandasDisponibles.unshift("Vianda del día");

console.log("Se agregó una vianda al final y otra al principio.");


const viandaEliminada = viandasDisponibles.pop();

console.log("Se ha eliminado el elemento: " + viandaEliminada);


alert("Viandas disponibles:\n" +
    viandasDisponibles.join("\n"));

const viandaBuscada = prompt(
    "¿Qué vianda querés buscar? Escribí su nombre tal como aparece en la lista."
);

if (viandaBuscada !== null && viandaBuscada.trim() !== "") {
    if (viandasDisponibles.includes(viandaBuscada.trim())) {
        const posicion = viandasDisponibles.indexOf(
            viandaBuscada.trim()
        );

        console.log(
            "La vianda " + viandaBuscada +
            " está disponible en la posición " + posicion
        );
    } else {
        console.log("La vianda buscada no está en la lista.");
    }
} else {
    console.log("No ingresaste ninguna vianda para buscar.");
}


const viandaReemplazada = viandasDisponibles[3];
viandasDisponibles.splice(3, 1, "Ensalada completa");

console.log(
    "Se reemplazó " + viandaReemplazada +
    " por Pescado en la posición 2."
);


function mostrarMenu(lista) {
    console.log("--- MENÚ DE VIANDAS DISPONIBLES ---");

    for (const vianda of lista) {
        console.log("Vianda: " + vianda);
    }

    console.log("Total de viandas: " + lista.length);
}


function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}


const aplicarDescuento = (total, descuento) => {
    return total - (total * descuento / 100);
};


mostrarMenu(viandasDisponibles);


const nombreCliente = prompt("Ingresá tu nombre:");

if (nombreCliente !== null && nombreCliente.trim() !== "") {

    console.log("Cliente: " + nombreCliente);

    const opcion = prompt(
        "¿Qué vianda querés pedir?\n" +
        "1. Pollo - $7000\n" +
        "2. Vegetariana - $6500\n" +
        "3. Carne - $7500"
    );

    let precioVianda = 0;
    let nombreVianda = "";

    if (opcion === "1") {
        nombreVianda = "Pollo";
        precioVianda = 7000;
    } else if (opcion === "2") {
        nombreVianda = "Vegetariana";
        precioVianda = 6500;
    } else if (opcion === "3") {
        nombreVianda = "Carne";
        precioVianda = 7500;
    } else {
        console.log("La opción ingresada no es válida.");
    }

    if (precioVianda > 0) {

        const cantidadIngresada = prompt(
            "¿Cuántas viandas querés pedir?"
        );

        const cantidad = Number(cantidadIngresada);

        if (
            cantidadIngresada !== null &&
            cantidadIngresada.trim() !== "" &&
            Number.isInteger(cantidad) &&
            cantidad > 0
        ) {

            const total = calcularTotal(precioVianda, cantidad);

            let totalFinal = total;

            if (cantidad >= 3) {
                totalFinal = aplicarDescuento(total, 10);

                console.log("Se aplicó un descuento del 10%.");
            } else {
                console.log("No corresponde aplicar descuento.");
            }

            console.log("--- RESUMEN DEL PEDIDO ---");
            console.log("Cliente: " + nombreCliente);
            console.log("Vianda: " + nombreVianda);
            console.log("Cantidad: " + cantidad);
            console.log("Precio por unidad: $" + precioVianda);
            console.log("Subtotal: $" + total);
            console.log("Total final: $" + totalFinal);

            alert(
                "Resumen del pedido\n" +
                "Cliente: " + nombreCliente + "\n" +
                "Vianda: " + nombreVianda + "\n" +
                "Cantidad: " + cantidad + "\n" +
                "Total a pagar: $" + totalFinal
            );

           
            for (let i = 1; i <= cantidad; i++) {
                console.log("Preparando vianda número " + i);
            }

        } else {
            console.log("La cantidad ingresada no es válida.");
            alert("Ingresá una cantidad entera mayor que cero.");
        }
    }

} else {
    console.log("No ingresaste el nombre del cliente.");
}
