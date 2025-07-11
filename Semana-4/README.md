# 📝 Interfaz Interactiva con Persistencia de Datos

## Descripción

Este proyecto implementa una interfaz web interactiva que demuestra el uso de JavaScript para manipular el DOM, almacenar datos en Local Storage y Session Storage, y validar formularios en tiempo real.

## 🚀 Funcionalidades Implementadas

### ✅ Funcionalidades Principales

1. **Formulario Interactivo**
   - Campos para nombre y edad del usuario
   - Validación en tiempo real de los datos ingresados
   - Retroalimentación visual inmediata

2. **Persistencia de Datos**
   - Almacenamiento en Local Storage (persistente)
   - Recuperación automática de datos al cargar la página
   - Botón para limpiar todos los datos almacenados

3. **Contador de Interacciones**
   - Registro de interacciones del usuario en Session Storage
   - Contador que se reinicia al cerrar la pestaña/navegador
   - Visualización en tiempo real

4. **Validación Avanzada**
   - Validación de nombre (mínimo 2 caracteres, solo letras y espacios)
   - Validación de edad (entre 1 y 120 años)
   - Mensajes de error específicos para cada campo
   - Validación en tiempo real mientras el usuario escribe

### 🎨 Características Adicionales

- **Diseño Responsivo**: Interfaz moderna y adaptable
- **Feedback Visual**: Mensajes de éxito y error claros
- **Experiencia de Usuario**: Animaciones y transiciones suaves
- **Código Documentado**: Comentarios detallados en español
- **Manejo de Errores**: Try-catch para operaciones de almacenamiento

## 📁 Estructura del Proyecto

```
├── index.html          # Archivo HTML principal
├── css                 # Estilos de la pagina principal
├── script.js           # Lógica JavaScript
└── README.md          # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y formularios
- **CSS3**: Estilos modernos y responsivos
- **JavaScript ES6+**: Manipulación del DOM y almacenamiento
- **Local Storage**: Persistencia de datos del usuario
- **Session Storage**: Contador de interacciones por sesión

## 🚀 Cómo Usar

1. **Abrir el archivo**: Abre `index.html` en tu navegador web
2. **Completar el formulario**: Ingresa tu nombre y edad
3. **Guardar datos**: Haz clic en "Guardar Datos"
4. **Ver persistencia**: Recarga la página para ver los datos guardados
5. **Limpiar datos**: Usa "Limpiar Datos" para eliminar la información

## 📋 Funcionalidades Detalladas

### Almacenamiento de Datos

```javascript
// Local Storage - Persistente
localStorage.setItem('userData', JSON.stringify(userData));

// Session Storage - Temporal
sessionStorage.setItem('interactionCounter', contador.toString());
```

### Validación de Formularios

```javascript
// Validación de nombre
function validarNombre(nombre) {
    return nombre.trim().length >= 2 && 
           /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
}

// Validación de edad
function validarEdad(edad) {
    return edad >= 1 && edad <= 120 && Number.isInteger(edad);
}
```

### Manipulación del DOM

```javascript
// Actualizar contenido dinámicamente
function mostrarDatosUsuario(userData) {
    if (userData && userData.nombre && userData.edad) {
        // Mostrar datos encontrados
    } else {
        // Mostrar mensaje de no hay datos
    }
}
```

## 🎯 Objetivos de Aprendizaje Cumplidos

- ✅ **Manipulación del DOM**: Creación y modificación dinámica de elementos
- ✅ **Local Storage**: Almacenamiento persistente de datos del usuario
- ✅ **Session Storage**: Contador de interacciones por sesión
- ✅ **Validación de Formularios**: Validación en tiempo real con feedback
- ✅ **Event Listeners**: Manejo de eventos de click y input
- ✅ **JSON**: Serialización y deserialización de datos
- ✅ **Manejo de Errores**: Try-catch para operaciones críticas

## 🔧 Mejoras Implementadas

### Validación Avanzada
- Validación de caracteres especiales en nombres
- Rango de edad realista (1-120 años)
- Feedback visual inmediato

### Experiencia de Usuario
- Diseño moderno y responsivo
- Mensajes de éxito temporales
- Animaciones suaves en transiciones

### Código Limpio
- Funciones bien documentadas
- Separación clara de responsabilidades
- Nombres de variables descriptivos
- Comentarios

## 🧪 Pruebas Recomendadas

1. **Prueba de Persistencia**
   - Guarda datos y recarga la página
   - Verifica que los datos se mantengan

2. **Prueba de Validación**
   - Intenta guardar con campos vacíos
   - Prueba nombres con números o caracteres especiales
   - Prueba edades fuera del rango válido

3. **Prueba de Contador**
   - Haz clic en los botones varias veces
   - Recarga la página y verifica que el contador se mantenga
   - Cierra la pestaña y abre una nueva para ver el reinicio

4. **Prueba de Limpieza**
   - Guarda datos y luego limpia
   - Verifica que no queden datos residuales

## 📝 Notas Técnicas

### Almacenamiento
- **Local Storage**: Datos del usuario (persistente)
- **Session Storage**: Contador de interacciones (temporal)

### Validaciones
- **Nombre**: Mínimo 2 caracteres, solo letras y espacios
- **Edad**: Entre 1 y 120 años, número entero

### Compatibilidad
- Compatible con navegadores modernos
- Funciona sin conexión a internet
- No requiere servidor web

