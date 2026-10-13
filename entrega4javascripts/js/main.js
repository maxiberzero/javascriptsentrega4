


const pedidos = ["Milanesa", "Ensalada", "Hamburguesa", "Pizza", "Empanadas"];


pedidos.push("Tarta");
pedidos.unshift("Pedido urgente");


const pedidoEliminado = pedidos.pop();
console.log("Se ha eliminado el elemento: " + pedidoEliminado);


const pedidoBuscado = prompt("¿Qué pedido querés buscar?");

if (pedidos.includes(pedidoBuscado)) {
    const posicion = pedidos.indexOf(pedidoBuscado);
    console.log("El pedido " + pedidoBuscado + " está en la posición " + posicion);
} else {
    console.log("El pedido no se encuentra en la lista");
}


pedidos.splice(2, 1, "Pollo al horno");


function listarPedidos(lista) {
    console.log("--- Pedidos actuales ---");

    for (const pedido of lista) {
        console.log("Pedido: " + pedido);
    }

    console.log("Total de pedidos: " + lista.length);
}

listarPedidos(pedidos);
