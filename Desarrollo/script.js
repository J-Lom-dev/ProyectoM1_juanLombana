const colorSelect = document.getElementById("color");
const formatSelect = document.getElementById("format");
const colorBox = document.getElementById("colorBox");
const boton = document.getElementById("boton");
const toast = document.getElementById("toast");

// Guardamos los colores actuales en un array en memoria (valores RGB)
let paletaActual = [];

// Función para mostrar la notificación de microfeedback
function mostrarNotificacion(mensaje) {
    toast.innerText = mensaje;
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);
}

// Genera un objeto con valores R, G y B aleatorios
function generarColorRGB() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

// Convierte valores RGB a texto HEX (#FFFFFF)
function rgbAHex(r, g, b) {
    let hexR = r.toString(16).padStart(2, "0").toUpperCase();
    let hexG = g.toString(16).padStart(2, "0").toUpperCase();
    let hexB = b.toString(16).padStart(2, "0").toUpperCase();
    return "#" + hexR + hexG + hexB;
}

// Devuelve el texto del código según el formato seleccionado
function obtenerTextoFormato(colorObj, formato) {
    if (formato === "rgba") {
        return "rgba(" + colorObj.r + ", " + colorObj.g + ", " + colorObj.b + ", 1)";
    } else {
        return rgbAHex(colorObj.r, colorObj.g, colorObj.b);
    }
}

// 1. Esta función SOLO genera nuevos colores cuando presionas "Generar paleta"
function generarNuevaPaleta() {
    paletaActual = [];
    let cantidad = Number(colorSelect.value);

    for (let i = 0; i < cantidad; i++) {
        paletaActual.push(generarColorRGB());
    }

    renderizarTarjetas();
    mostrarNotificacion("¡Nueva paleta generada!");
}

// 2. Esta función dibuja o actualiza los elementos en la pantalla
function renderizarTarjetas() {
    colorBox.innerHTML = "";
    let formato = formatSelect.value;
    let cantidad = Number(colorSelect.value);

    // Ajusta la cantidad si el usuario cambia el selector de tamaño
    while (paletaActual.length < cantidad) {
        paletaActual.push(generarColorRGB());
    }

    for (let i = 0; i < cantidad; i++) {
        let colorObj = paletaActual[i];
        let textoCodigo = obtenerTextoFormato(colorObj, formato);

        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-color";
        
        // Asignamos el fondo concatenando cadenas con el operador +
        tarjeta.style.backgroundColor = "rgb(" + colorObj.r + ", " + colorObj.g + ", " + colorObj.b + ")";

        let textoColor = document.createElement("span");
        textoColor.className = "textColor";
        textoColor.innerText = textoCodigo;

        // Extra Credit: copiar código al hacer clic
        tarjeta.addEventListener("click", () => {
            navigator.clipboard.writeText(textoCodigo);
            mostrarNotificacion("¡Copiado: " + textoCodigo + "!");
        });

        tarjeta.appendChild(textoColor);
        colorBox.appendChild(tarjeta);
    }
}

// ESCUCHADORES DE EVENTOS

// Solo el botón principal vuelve a crear colores totalmente nuevos
boton.addEventListener("click", generarNuevaPaleta);

// Al cambiar el selector de formato, SOLO redibujamos el texto sin cambiar la paleta
formatSelect.addEventListener("change", renderizarTarjetas);

// Al cambiar la cantidad de colores, ajusta las tarjetas manteniendo los colores existentes
colorSelect.addEventListener("change", renderizarTarjetas);

// Generar paleta inicial al cargar la página
generarNuevaPaleta();