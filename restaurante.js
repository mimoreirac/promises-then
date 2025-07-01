function tomarPedido(pedidoCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!pedidoCliente || !pedidoCliente.item) {
        reject(new Error("Por favor ingrese un pedido."));
      } else {
        console.log(
          `Pedido aceptado: ${pedidoCliente.item} para ${pedidoCliente.nombreCliente}.`,
        );
        resolve(pedidoCliente);
      }
    }, 3000);
  });
}

function revisarIngredientes(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fueraDeStock = ["langosta", "caviar", "cangrejo"];
      if (fueraDeStock.includes(pedido.item.toLowerCase())) {
        reject(
          new Error(`Perdón, no disponemos de ${pedido.item} por el momento.`),
        );
      } else {
        console.log(`Ingredientes disponibles para ${pedido.item}`);
        resolve(pedido);
      }
    }, 2000);
  });
}

function prepararComida(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pedidoPreparado = {
        ...pedido,
        estado: "cocinado",
        temperatura: "caliente",
        tiempoDePreparacion: new Date().toLocaleTimeString(),
      };
      console.log(
        `${pedido.item} está listo! Se preparó a las ${pedidoPreparado.tiempoDePreparacion}`,
      );
      resolve(pedidoPreparado);
    }, 5000);
  });
}

//================================
// EJERCICIO: COMPLETA LA FUNCIÓN
//================================

function procesarPedido(pedidoCliente) {
  console.log(`Preparando pedido para ${pedidoCliente.nombreCliente}...`);

  return tomarPedido(pedidoCliente)
    .then((pedido) => revisarIngredientes(pedido))
    .then((pedido) => prepararComida(pedido))
    .then((pedidoFinal) => {
      console.log(
        `Orden completa! ${pedidoFinal.nombreCliente}, su ${pedidoFinal.item} se encuentra listo!`,
      );
      return pedidoFinal;
    })
    .catch((error) => {
      console.error(`Pedido no procesado: ${error.message}`);
      throw error;
    });
}

export { tomarPedido, revisarIngredientes, prepararComida, procesarPedido };
