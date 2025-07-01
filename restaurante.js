// NO TOQUES ESTE CÓDIGO
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
//=============================================================================================

//================================
// EJERCICIO: COMPLETA LA FUNCIÓN
//================================

function procesarPedido(pedidoCliente) {
  console.log(`Preparando pedido para ${pedidoCliente.nombreCliente}...`);

  // Objetivo: Encadena las funciones en orden:
  // 1. Toma el Pedido
  // 2. Revisa los Ingredientes
  // 3. Prepara la comida
  // 4. Regresa el pedido final con un mensaje de éxito
  // 5. Muestra mensajes de error con .catch() y devuelve el error usando throw.
  // Verifica tu solución ejecutando npm run test

  return tomarPedido(pedidoCliente)
  //... Continúa aquí...

}

//========================================================================================
// NO TOQUES ESTE CÓDIGO
export { tomarPedido, revisarIngredientes, prepararComida, procesarPedido };
//=========================================================================