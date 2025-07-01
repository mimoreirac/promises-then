
const itemHelados = [
  { id: 1, nombre: "Helado chocolate", precio: 20.0 },
  {
    id: 2,
    nombre: "Helado vainilla",
    precio: 10.0,
  },
  {
    id: 3,
    nombre: "Helado fresa",
    precio: 15.0,
  },
  {
    id: 4,
    nombre: "Helado menta",
    precio: 8.0,
  },
];

function obtenerValorItem(itemId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = itemHelados.find((helado) => helado.id === itemId);
      if (item) {
        resolve(item.precio);
      } else {
        reject(`No se encontró el helado ${itemId}`);
      }
    }, 2000);
  });
}

const promesasCombo = [
    obtenerValorItem(1),
    obtenerValorItem(4)
]

Promise.all(promesasCombo)
.then((precios) => {
    console.log("El precio de los helados es", precios)
    const precioTotal = precios.reduce((suma, precio) => suma + precio, 0)
    console.log(`El precio total es: ${precioTotal}`)
})
.catch((error)=>{
    console.error("No se pudo crear el combo,", error)
})
