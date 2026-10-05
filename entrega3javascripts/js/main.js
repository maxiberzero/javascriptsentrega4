const precioVianda = 7000;


function mostrarMenu(nombre) {
    console.log("Hola " + nombre);
    console.log("Menu de viandas:");
    console.log("1 - Vianda de pollo");
    console.log("2 - Vianda vegetariana");
    console.log("3 - Vianda de carne");
}


function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}


const aplicarDescuento = (total, descuento) => total - (total * descuento / 100);



const nombre = prompt("Ingresa tu nombre");

mostrarMenu(nombre);

let opcion = parseInt(prompt("Elegí una vianda: 1, 2 o 3"));
let cantidad = parseInt(prompt("¿Cuántas viandas querés?"));

let precio = 0;
let nombreVianda = "";


if (opcion === 1) {
    nombreVianda = "Vianda de pollo";
    precio = 7000;
} else if (opcion === 2) {
    nombreVianda = "Vianda vegetariana";
    precio = 6500;
} else if (opcion === 3) {
    nombreVianda = "Vianda de carne";
    precio = 7500;
} else {
    alert("La opcion ingresada no es correcta.");
}


if (precio > 0 && cantidad > 0) {

    let total = calcularTotal(precio, cantidad);

  
    if (cantidad >= 3) {
        total = aplicarDescuento(total, 10);
    }

    console.log("Vianda elegida: " + nombreVianda);
    console.log("Cantidad: " + cantidad);
    console.log("Total: $" + total);

    alert(
        "Pedido realizado\n" +
        "Vianda: " + nombreVianda + "\n" +
        "Cantidad: " + cantidad + "\n" +
        "Total: $" + total
    );

} else {
    alert("No se pudo realizar el pedido.");
}