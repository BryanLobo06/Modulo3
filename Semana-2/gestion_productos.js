// Gestión de Datos con Objetos, Sets y Maps

// Almacenar información de productos usando un objeto (no array)
const productosObj = {
  1: { id: 1, nombre: "Laptop", precio: 1200 },
  2: { id: 2, nombre: "Mouse", precio: 25 },
  3: { id: 3, nombre: "Teclado", precio: 45 },
  4: { id: 4, nombre: "Monitor", precio: 300 },
  5: { id: 2, nombre: "Mouse", precio: 25 }, // Duplicado a propósito
};

// Convertir los valores del objeto a un Set usando el id como clave única
const productosSet = new Set();
for (const key in productosObj) {
  productosSet.add(productosObj[key].id);
}

// Crear un array de productos únicos usando el Set de ids
const productosUnicos = Array.from(productosSet).map(id => {
  // Buscar el primer producto con ese id en productosObj
  return Object.values(productosObj).find(p => p.id === id);
});

// Usar un Map para agregar información adicional (categoría)
const categorias = new Map();
productosUnicos.forEach(producto => {
  let categoria;
  if (["Laptop", "Monitor"].includes(producto.nombre)) {
    categoria = "Tecnología";
  } else {
    categoria = "Accesorios";
  }
  if (!categorias.has(categoria)) {
    categorias.set(categoria, []);
  }
  categorias.get(categoria).push(producto.nombre);
});

// 4. Imprimir y recorrer los datos
console.log("\nRecorriendo productos con for...in:");
for (const i in productosUnicos) {
  console.log(productosUnicos[i]);
}

console.log("\nRecorriendo productos con for...of:");
for (const producto of productosUnicos) {
  console.log(producto);
}

console.log("\nRecorriendo productos con forEach:");
productosUnicos.forEach(producto => {
  console.log(producto);
});

console.log("\nRecorriendo categorías con for...of:");
for (const [categoria, nombres] of categorias) {
  console.log(`Categoría: ${categoria} => Productos: ${nombres.join(", ")}`);
}

console.log("\nRecorriendo categorías con forEach:");
categorias.forEach((nombres, categoria) => {
  console.log(`Categoría: ${categoria} => Productos: ${nombres.join(", ")}`);
}); 
console.table(categorias)