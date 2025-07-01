import { describe, it, expect } from "vitest";
import { procesarPedido } from "./restaurante.js";

describe("procesarPedido", () => {
  it("debería procesar un pedido válido y devolver el pedido final cocinado", async () => {
    const pedidoCliente = {
      nombreCliente: "Carlos",
      item: "Pizza",
    };

    const resultado = await procesarPedido(pedidoCliente);

    expect(resultado).toBeDefined();
    expect(resultado.nombreCliente).toBe("Carlos");
    expect(resultado.item).toBe("Pizza");
    expect(resultado.estado).toBe("cocinado");
    expect(resultado.temperatura).toBe("caliente");
    expect(resultado).toHaveProperty("tiempoDePreparacion");
  }, 12000);

  it("debería rechazar un pedido para un item que no está en stock", async () => {
    const pedidoFueraDeStock = {
      nombreCliente: "Ana",
      item: "Langosta", // Este item se encuentra fuera de stock
    };

    await expect(procesarPedido(pedidoFueraDeStock)).rejects.toThrow(
      "Perdón, no disponemos de Langosta por el momento.",
    );
  }, 12000);

  it("debería rechazar un pedido inválido que no contiene un item", async () => {
    const pedidoInvalido = {
      nombreCliente: "Dario",
      // La propiedad 'item' no existe
    };

    await expect(procesarPedido(pedidoInvalido)).rejects.toThrow(
      "Por favor ingrese un pedido.",
    );
  }, 12000);
});
