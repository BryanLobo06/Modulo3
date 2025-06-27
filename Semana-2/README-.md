# Gestión de Datos con Objetos, Sets y Maps

Este proyecto muestra una forma alternativa de gestionar información de productos utilizando **objetos**, **Sets** y **Maps** en JavaScript. Se ejemplifica cómo evitar duplicados y cómo recorrer e imprimir los datos usando diferentes bucles y métodos.

---

## 1. Almacenamiento de productos con un objeto

```js
const productosObj = {
  1: { id: 1, nombre: "Laptop", precio: 1200 },
  2: { id: 2, nombre: "Mouse", precio: 25 },
  3: { id: 3, nombre: "Teclado", precio: 45 },
  4: { id: 4, nombre: "Monitor", precio: 300 },
  5: { id: 2, nombre: "Mouse", precio: 25 }, // Duplicado a propósito
};
```
- Se utiliza un objeto donde cada clave representa un producto y su valor es el objeto con las propiedades `id`, `nombre` y `precio`.
- Se incluye un producto duplicado (id 2) para demostrar la eliminación de duplicados.

---

## 2. Eliminación de duplicados usando Set

```js
const productosSet = new Set();
for (const key in productosObj) {
  productosSet.add(productosObj[key].id);
}
```
- Se recorre el objeto y se agregan los `id` de los productos a un `Set`.
- El `Set` solo permite valores únicos, por lo que elimina ids duplicados.

### ¿Qué es y para qué se usa Set?

- **Set** es una estructura de datos de JavaScript que almacena valores únicos, es decir, no permite duplicados.
- En este caso, se usa para recolectar los ids únicos de los productos, asegurando que no haya productos repetidos por id.

---

## 3. Reconstrucción del array de productos únicos

```js
const productosUnicos = Array.from(productosSet).map(id => {
  return Object.values(productosObj).find(p => p.id === id);
});
```
- Se convierte el Set de ids únicos en un array.
- Para cada id, se busca el primer producto correspondiente en el objeto original y se arma un nuevo array de productos únicos.

---

## 4. Uso de Map para agregar información adicional (categoría)

```js
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
```
- Se crea un `Map` para asociar categorías con los nombres de los productos.
- La categoría se asigna dinámicamente según el nombre del producto.
- Si la categoría no existe en el Map, se crea y luego se agrega el producto.

---

## 5. Recorrido e impresión de los datos

### Recorriendo productos

- **for...in**
  ```js
  for (const i in productosUnicos) {
    console.log(productosUnicos[i]);
  }
  ```
  Recorre los índices del array e imprime cada producto.

- **for...of**
  ```js
  for (const producto of productosUnicos) {
    console.log(producto);
  }
  ```
  Recorre directamente los objetos producto e imprime cada uno.

- **forEach**
  ```js
  productosUnicos.forEach(producto => {
    console.log(producto);
  });
  ```
  Utiliza el método `forEach` para recorrer e imprimir cada producto.

### Recorriendo categorías

- **for...of**
  ```js
  for (const [categoria, nombres] of categorias) {
    console.log(`Categoría: ${categoria} => Productos: ${nombres.join(", ")}`);
  }
  ```
  Recorre las entradas del `Map` e imprime la categoría y los productos asociados.

- **forEach**
  ```js
  categorias.forEach((nombres, categoria) => {
    console.log(`Categoría: ${categoria} => Productos: ${nombres.join(", ")}`);
  });
  ```
  Utiliza el método `forEach` del `Map` para recorrer e imprimir cada categoría y sus productos.

---

## Resumen

- **Objeto**: Para almacenar productos con propiedades.
- **Set**: Para eliminar productos duplicados por id.
- **Map**: Para asociar categorías a productos.
- **Bucles y métodos**: Para recorrer e imprimir los datos de diferentes formas.
