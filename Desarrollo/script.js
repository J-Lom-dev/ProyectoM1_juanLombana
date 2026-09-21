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
