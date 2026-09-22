# 🤖 Uso de Inteligencia Artificial (IA)

Durante el desarrollo del proyecto **Colorfly Studio - Generador de Paletas**, se utilizaron herramientas de inteligencia artificial como apoyo para la investigación, el aprendizaje de conceptos, la estructuración de código, la resolución de errores sintácticos y la elaboración de la documentación.

Las herramientas utilizadas fueron:

- **Google Gemini**

> **Importante:** La inteligencia artificial fue utilizada únicamente como apoyo para el aprendizaje y la orientación técnica. Todas las propuestas fueron revisadas, adaptadas, modificadas y validadas manualmente antes de incorporarse al proyecto final.

---

# 📝 Registro de Prompts Utilizados

## 🎨 Prompt 1: Estructura HTML semántica y base del proyecto

### 🎯 Objetivo
Obtener una estructura HTML5 semántica y limpia alineada con las exigencias del proyecto.

### 💬 Prompt
> Ayúdame a estructurar el archivo HTML para un generador de paletas de colores.

### 🔧 Aplicación en el proyecto
La propuesta fue integrada en el archivo `index.html`, organizando los controles de usuario dentro del elemento `<main>` y vinculando los identificadores requeridos por JavaScript.

### 📚 Aprendizaje obtenido
- Vinculación correcta de controles con etiquetas para accesibilidad (`for` e `id`).
- Organización limpia de contenedores para manipulación mediante el DOM.

---

## 🎨 Prompt 2: Estilos CSS y corrección de anidamiento

### 🎯 Objetivo
Corregir un error de sintaxis CSS causado por llaves no cerradas en estilos anidados y aplicar un diseño oscuro responsivo con tarjetas dinámicas.

### 💬 Prompt
> Tengo problemas con la disposición de las tarjetas de colores y no se aplican correctamente los estilos dentro del contenedor `#colorBox`.

### ✅ Resultado obtenido
La IA identificó que las reglas `.tarjeta-color` y `.textColor` estaban erróneamente anidadas dentro de `#colorBox` sin haber cerrado la llave `}`, corrigiendo la estructura y aplicando Flexbox.

### 💻 Ejemplo sugerido
```css
#colorBox {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}

.tarjeta-color {
    width: 195px;
    height: 120px;
    border-radius: 8px;
    display: flex;
    align-items: flex-end;
}

🔧 Aplicación en el proyecto

Se corrigió la sintaxis en style.css, aplicando una cuadrícula flexible con Flexbox para que las tarjetas de colores se adapten en pantalla de forma limpia.
📚 Aprendizaje obtenido

    Identificación de errores sintácticos en hojas de estilo CSS.

    Uso de Flexbox (flex-wrap, gap, justify-content) para maquetación responsiva.

    Aplicación de pseudo-clases como :hover para efectos de transformación visual.

⚙️ Prompt 3: Manipulación del DOM y generación de colores aleatorios
🎯 Objetivo

Desarrollar las funciones JavaScript para generar colores en formatos HEX o RGBA y renderizar las tarjetas dentro del DOM de forma dinámica.
💬 Prompt

    Ayúdame con la función de JavaScript que genere valores aleatorios en formato RGBA.

✅ Resultado obtenido

La IA facilitó algoritmos utilizando Math.random() y Math.floor().
💻 Ejemplo sugerido
JavaScript

function generarColorAleatorio() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgba(" + r + ", " + g + ", " + b + ", 1)";
}

🔧 Aplicación en el proyecto

Se implementó la lógica en script.js para iterar con un bucle for según la cantidad de colores requerida (6, 8 o 9) e insertar las tarjetas en el contenedor #colorBox.
📚 Aprendizaje obtenido

    Generación de números aleatorios con Math.random().

    Manipulación activa del DOM con createElement(), appendChild() e innerHTML.

    Manejo de bucles de repetición controlados por entradas de usuario.

🔄 Prompt 4: Conservación de colores al cambiar de formato
🎯 Objetivo

Evitar que la paleta se vuelva a generar desde cero cuando el usuario solo desea cambiar el formato de texto entre RGBA y HEX.
💬 Prompt

    Necesito que cuando cambie la opción del selector de formato (RGBA a HEX), los colores de las tarjetas se mantengan exactamente iguales en pantalla y solo cambie el texto del código de la parte inferior, sin volver a generar colores aleatorios.

✅ Resultado obtenido

La IA sugirió almacenar la paleta activa en un arreglo en memoria como objetos {r, g, b} y separar la función que genera nuevos colores de la función que renderiza o actualiza la vista.
💻 Ejemplo sugerido
JavaScript

let paletaActual = [];

function renderizarTarjetas() {
    colorBox.innerHTML = "";
    let formato = formatSelect.value;
    for (let i = 0; i < paletaActual.length; i++) {
        let textoCodigo = obtenerTextoFormato(paletaActual[i], formato);
        // Actualiza el texto sin regenerar los colores en memoria
    }
}

formatSelect.addEventListener("change", renderizarTarjetas);

🔧 Aplicación en el proyecto

Se reestructuró la lógica de JavaScript para que el evento click del botón principal sea el único que genere nuevos colores aleatorios, mientras que el evento change del selector de formato únicamente traduzca la etiqueta de texto.
📚 Aprendizaje obtenido

    Almacenamiento de estado de la aplicación en arreglos en memoria.

    Separación de responsabilidades entre lógica de negocio y renderizado del DOM.

    Manejo del evento change en elementos <select>.

📋 Prompt 5: Copiar al portapapeles y Microfeedback (Toast)
🎯 Objetivo

Implementar la funcionalidad de copiar el código de color al hacer clic sobre una tarjeta y notificar al usuario mediante un aviso flotante.
💬 Prompt

    ¿Cómo puedo hacer para que al hacer clic en una tarjeta de color se copie su código al portapapeles y aparezca un aviso flotante (toast) confirmando la acción?

✅ Resultado obtenido

La IA sugirió utilizar la API navigator.clipboard.writeText() y controlar la visibilidad de una notificación flotante mediante clases CSS y setTimeout().
💻 Ejemplo sugerido
JavaScript

function mostrarNotificacion(mensaje) {
    toast.innerText = mensaje;
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);
}

tarjeta.addEventListener("click", () => {
    navigator.clipboard.writeText(textoCodigo);
    mostrarNotificacion("¡Copiado: " + textoCodigo + "!");
});

🔧 Aplicación en el proyecto

Se agregó el contenedor #toast en el HTML, sus estilos de animación flotante en CSS y la función temporizada en JavaScript para retroalimentar al usuario tras cada interacción.
📚 Aprendizaje obtenido

    Uso de la API del portapapeles navigator.clipboard.

    Control de temporizadores asíncronos con setTimeout().

    Implementación de patrones de microfeedback (Toast UI).

✅ Conclusión

La inteligencia artificial se utilizó como un copiloto de aprendizaje para:

    Resolver dudas de sintaxis y errores de maquetación en CSS.

    Comprender la manipulación del DOM y el manejo de eventos en JavaScript.

    Aprender a separar la generación de datos del renderizado visual.

    Implementar buenas prácticas de accesibilidad, semántica y documentación técnica.

Nota final: Las respuestas y sugerencias de la IA sirvieron como referencia conceptual. Todo el código del proyecto fue probado, depurado, adaptado e integrado manualmente para asegurar un entendimiento total de cada línea escrita.


