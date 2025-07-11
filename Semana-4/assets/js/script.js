// ============================================
// INTERFAZ INTERACTIVA CON PERSISTENCIA DE DATOS
// ============================================

// Variables globales para elementos del DOM
const userForm = document.getElementById('userForm');
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const guardarBtn = document.getElementById('guardarBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
const outputDiv = document.getElementById('output');
const interactionCounter = document.getElementById('interactionCounter');
const successMessage = document.getElementById('successMessage');
const nombreError = document.getElementById('nombreError');
const edadError = document.getElementById('edadError');

// Claves para almacenamiento
const LOCAL_STORAGE_KEY = 'userData';
const SESSION_COUNTER_KEY = 'interactionCounter';

// ============================================
// FUNCIONES DE VALIDACIÓN
// ============================================

/**
 * Valida que el nombre sea válido
 * @param {string} nombre - El nombre a validar
 * @returns {boolean} - True si es válido, false en caso contrario
 */
function validarNombre(nombre) {
    return nombre.trim().length >= 2 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
}

/**
 * Valida que la edad sea válida
 * @param {number} edad - La edad a validar
 * @returns {boolean} - True si es válida, false en caso contrario
 */
function validarEdad(edad) {
    return edad >= 1 && edad <= 120 && Number.isInteger(edad);
}

/**
 * Muestra un mensaje de error para un campo específico
 * @param {HTMLElement} inputElement - El elemento input
 * @param {HTMLElement} errorElement - El elemento de error
 * @param {boolean} mostrar - Si mostrar o ocultar el error
 */
function mostrarError(inputElement, errorElement, mostrar) {
    if (mostrar) {
        inputElement.classList.add('error');
        errorElement.style.display = 'block';
    } else {
        inputElement.classList.remove('error');
        errorElement.style.display = 'none';
    }
}

/**
 * Valida todos los campos del formulario
 * @returns {boolean} - True si todos los campos son válidos
 */
function validarFormulario() {
    const nombre = nombreInput.value.trim();
    const edad = parseInt(edadInput.value);
    
    let esValido = true;
    
    // Validar nombre
    if (!validarNombre(nombre)) {
        mostrarError(nombreInput, nombreError, true);
        esValido = false;
    } else {
        mostrarError(nombreInput, nombreError, false);
    }
    
    // Validar edad
    if (!validarEdad(edad)) {
        mostrarError(edadInput, edadError, true);
        esValido = false;
    } else {
        mostrarError(edadInput, edadError, false);
    }
    
    return esValido;
}

// ============================================
// FUNCIONES DE ALMACENAMIENTO
// ============================================

/**
 * Guarda los datos del usuario en Local Storage
 * @param {Object} userData - Los datos del usuario
 */
function guardarEnLocalStorage(userData) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
        console.log('Datos guardados en Local Storage:', userData);
    } catch (error) {
        console.error('Error al guardar en Local Storage:', error);
    }
}

/**
 * Recupera los datos del usuario desde Local Storage
 * @returns {Object|null} - Los datos del usuario o null si no existen
 */
function recuperarDeLocalStorage() {
    try {
        const datos = localStorage.getItem(LOCAL_STORAGE_KEY);
        return datos ? JSON.parse(datos) : null;
    } catch (error) {
        console.error('Error al recuperar de Local Storage:', error);
        return null;
    }
}

/**
 * Limpia todos los datos del Local Storage
 */
function limpiarLocalStorage() {
    try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        console.log('Local Storage limpiado');
    } catch (error) {
        console.error('Error al limpiar Local Storage:', error);
    }
}

// ============================================
// FUNCIONES DE SESSION STORAGE
// ============================================

/**
 * Incrementa el contador de interacciones en Session Storage
 */
function incrementarContadorInteracciones() {
    try {
        let contador = parseInt(sessionStorage.getItem(SESSION_COUNTER_KEY)) || 0;
        contador++;
        sessionStorage.setItem(SESSION_COUNTER_KEY, contador.toString());
        actualizarContadorEnPantalla(contador);
        console.log('Contador de interacciones actualizado:', contador);
    } catch (error) {
        console.error('Error al actualizar contador de interacciones:', error);
    }
}

/**
 * Actualiza el contador en la pantalla
 * @param {number} contador - El valor del contador
 */
function actualizarContadorEnPantalla(contador) {
    interactionCounter.textContent = contador;
}

/**
 * Inicializa el contador de interacciones desde Session Storage
 */
function inicializarContadorInteracciones() {
    try {
        const contador = parseInt(sessionStorage.getItem(SESSION_COUNTER_KEY)) || 0;
        actualizarContadorEnPantalla(contador);
    } catch (error) {
        console.error('Error al inicializar contador:', error);
        actualizarContadorEnPantalla(0);
    }
}

// ============================================
// FUNCIONES DE MANIPULACIÓN DEL DOM
// ============================================

/**
 * Muestra los datos del usuario en la página
 * @param {Object} userData - Los datos del usuario
 */
function mostrarDatosUsuario(userData) {
    if (userData && userData.nombre && userData.edad) {
        outputDiv.innerHTML = `
            <div style="background-color: #d4edda; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745;">
                <h4 style="margin: 0 0 10px 0; color: #155724;">Datos Encontrados</h4>
                <p><strong>Nombre:</strong> ${userData.nombre}</p>
                <p><strong>Edad:</strong> ${userData.edad} años</p>
                <p style="font-size: 12px; color: #666; margin-top: 10px;">
                    Última actualización: ${new Date().toLocaleString('es-ES')}
                </p>
            </div>
        `;
    } else {
        outputDiv.innerHTML = `
            <div style="background-color: #f8d7da; padding: 15px; border-radius: 5px; border-left: 4px solid #dc3545;">
                <h4 style="margin: 0 0 10px 0; color: #721c24;">No hay datos almacenados</h4>
                <p>Completa el formulario y haz clic en "Guardar Datos" para almacenar información.</p>
            </div>
        `;
    }
}

/**
 * Muestra un mensaje de éxito temporal
 */
function mostrarMensajeExito() {
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

/**
 * Limpia el formulario
 */
function limpiarFormulario() {
    userForm.reset();
    mostrarError(nombreInput, nombreError, false);
    mostrarError(edadInput, edadError, false);
}

// ============================================
// MANEJADORES DE EVENTOS
// ============================================

/**
 * Maneja el evento de guardar datos
 */
function manejarGuardarDatos() {
    // Incrementar contador de interacciones
    incrementarContadorInteracciones();
    
    // Validar formulario
    if (!validarFormulario()) {
        return;
    }
    
    // Obtener datos del formulario
    const userData = {
        nombre: nombreInput.value.trim(),
        edad: parseInt(edadInput.value),
        fechaGuardado: new Date().toISOString()
    };
    
    // Guardar en Local Storage
    guardarEnLocalStorage(userData);
    
    // Mostrar datos actualizados
    mostrarDatosUsuario(userData);
    
    // Mostrar mensaje de éxito
    mostrarMensajeExito();
    
    // Limpiar formulario
    limpiarFormulario();
}

/**
 * Maneja el evento de limpiar datos
 */
function manejarLimpiarDatos() {
    // Incrementar contador de interacciones
    incrementarContadorInteracciones();
    
    // Limpiar Local Storage
    limpiarLocalStorage();
    
    // Actualizar pantalla
    mostrarDatosUsuario(null);
    
    // Limpiar formulario
    limpiarFormulario();
    
    // Mostrar mensaje de confirmación
    outputDiv.innerHTML = `
        <div style="background-color: #d1ecf1; padding: 15px; border-radius: 5px; border-left: 4px solid #17a2b8;">
            <h4 style="margin: 0 0 10px 0; color: #0c5460;">Datos Eliminados</h4>
            <p>Los datos han sido eliminados del almacenamiento local.</p>
        </div>
    `;
}

// ============================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================

/**
 * Inicializa la aplicación cuando se carga la página
 */
function inicializarAplicacion() {
    console.log('Inicializando aplicación...');
    
    // Recuperar y mostrar datos existentes
    const datosExistentes = recuperarDeLocalStorage();
    mostrarDatosUsuario(datosExistentes);
    
    // Inicializar contador de interacciones
    inicializarContadorInteracciones();
    
    // Configurar event listeners
    guardarBtn.addEventListener('click', manejarGuardarDatos);
    limpiarBtn.addEventListener('click', manejarLimpiarDatos);
    
    // Validación en tiempo real
    nombreInput.addEventListener('input', () => {
        if (nombreInput.value.trim()) {
            mostrarError(nombreInput, nombreError, !validarNombre(nombreInput.value.trim()));
        } else {
            mostrarError(nombreInput, nombreError, false);
        }
    });
    
    edadInput.addEventListener('input', () => {
        if (edadInput.value) {
            mostrarError(edadInput, edadError, !validarEdad(parseInt(edadInput.value)));
        } else {
            mostrarError(edadInput, edadError, false);
        }
    });
    
    // Prevenir envío del formulario con Enter
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        manejarGuardarDatos();
    });
    
    console.log('Aplicación inicializada correctamente');
}

// ============================================
// EJECUCIÓN CUANDO EL DOM ESTÁ LISTO
// ============================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', inicializarAplicacion);