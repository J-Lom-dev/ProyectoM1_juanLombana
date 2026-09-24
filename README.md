# ProyectoM1_juanLombana

**Link de web:**

https://j-lom-dev.github.io/ProyectoM1_juanLombana/Desarrollo/

# Colorfly Studio - Generador de Paletas de Colores

## 📖 Descripción

**Colorfly Studio** es una aplicación web interactiva que permite generar paletas de colores aleatorias de manera rápida y sencilla, ofreciendo opciones para personalizar el tamaño de la paleta y cambiar el formato de visualización en tiempo real sin perder los colores generados.

Esta herramienta facilita la creación y exploración de combinaciones atractivas para proyectos de diseño web, interfaces de usuario y trabajos creativos.

---

## 📌 Índice

- [Estructura de la app](estructura.md)
- [Uso de IA](IA.md)

---

## ℹ️ Alcance y Funcionalidades

La aplicación cuenta con las siguientes características alineadas a los requisitos del proyecto:

- **Generación dinámica de paletas:** Genera paletas de colores aleatorios mediante un botón principal.
- **Selección de tamaño:** Permite elegir entre 6, 8 o 9 colores.
- **Formatos de color:** Alterna el formato de visualización entre **HEX** y **RGBA**.
- **Copiar al portapapeles:** Copia el código del color directamente al portapapeles con solo hacer clic en la tarjeta correspondiente.
- **Microfeedback (Toast):** Muestra notificaciones visuales temporales cuando se genera una paleta o se copia un color al portapapeles.

---

## 🎯 ¿Para qué sirve?

Esta aplicación sirve para explorar y seleccionar combinaciones cromáticas de forma automática e interactiva, permitiendo obtener códigos listos para usar en:

- Desarrollo web Frontend.
- Diseño de interfaces de usuario (UI/UX).
- Identidad visual y branding.
- Proyectos creativos y de diseño gráfico.

---

## ⚙️ ¿Cómo funciona?

### 1. Botón Generar Paleta
Crea una combinación totalmente nueva de colores aleatorios y la renderiza en pantalla.

### 2. Tamaño de Paleta
Permite seleccionar cuántos colores incluirá la paleta activa:
- 6 colores
- 8 colores
- 9 colores

### 3. Selector de Formato de Color
Permite alternar entre dos formatos de representación de color:
- **RGBA:** Muestra los valores `rgba(r, g, b, 1)`.
- **HEX:** Muestra los valores hexadecimales `#RRGGBB`.

*(Al cambiar el formato, el texto del código se actualiza dinámicamente manteniendo la misma tonalidad de color)*.

### 4. Copiar Código de Color
Al hacer clic sobre cualquiera de las tarjetas de color, el código visualizado se copia automáticamente al portapapeles y se activa una notificación visual (*toast*) confirmando la acción.

---

## 🚀 ¿Cómo se usa?

1. Al ingresar a la página, se cargará automáticamente una paleta inicial por defecto.
2. Elige el tamaño deseado (6, 8 o 9 colores) con el selector correspondiente.
3. Selecciona el formato de color en el que prefieres trabajar (**RGBA** o **HEX**).
4. Presiona el botón **Generar paleta** para obtener una nueva combinación de colores.
5. Haz clic sobre cualquier tarjeta de color para copiar su código al portapapeles.

---

## 💻 Ejecutar en local

Este proyecto no requiere de dependencias ni servidor especial, ya instalación que desarrollado sain HTML, CSS y JavaScript puro.

**Pasos:**

1. Cloná el repositorio:

git clone https://github.com/J-Lom-dev/ProyectoM1_juanLombana.git

2. Ingresá a la carpeta del proyecto:

cd ProyectoM1_juanLombana

3. Abrí el archivo index.html Directo en tu navegador:

Hacé doble clic en index.html, o Si tenés la extensión Live Server en VS Code, hacé derecho clic sobre index.html y oprimir la opcion de **Open with live server**


## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructuración semántica del documento.
- **CSS3:** Estilos responsivos, maquetación con Flexbox y animación de tarjetas.
- **JavaScript (Vanilla JS):** Manipulación del DOM, manejo de eventos y lógica de conversión de colores.
- **Git & GitHub:** Control de versiones e historial de commits organizados.
- **GitHub Pages:** Despliegue de la aplicación web estática.

---

## 🤖 Uso de Inteligencia Artificial

Durante el desarrollo de este proyecto se utilizaron herramientas de IA como asistente de aprendizaje para:

- Estructurar y optimizar el código HTML, CSS y JavaScript siguiendo buenas prácticas.
- Resolver la conservación de colores en memoria al cambiar el formato entre RGBA y HEX sin regenerar la paleta.
- Organizar la jerarquía de encabezados y secciones en Markdown.
- Aplicar resaltado de sintaxis a los bloques de código y elementos de la interfaz.
- Corregir errores ortográficos y mejorar la redacción sin alterar el contenido ni el significado original del trabajo realizado.

La documentación completa de los prompts utilizados durante el desarrollo puede consultarse en el archivo [IA.md](IA.md).

---

## 👨‍💻 Autor

**Juan Pablo Lombana Ríos**
github: https://github.com/J-Lom-dev

*Proyecto desarrollado como parte del proceso de aprendizaje en desarrollo web.*