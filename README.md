# GANAVENT - Landing Page Profesional

## 📋 Descripción del Proyecto

GANAVENT es una landing page profesional diseñada para una empresa de productos cárnicos premium y servicios de registro de ganado. El sitio presenta una interfaz moderna, accesible y totalmente responsive que destaca la calidad y tradición de la marca con una temática de naturaleza y ganadería en tonos verdes.

## 🎯 Objetivos del Proyecto

- **Presentación Profesional**: Mostrar los servicios y productos de manera elegante
- **Conversión**: Guiar a los visitantes hacia la acción deseada
- **Accesibilidad**: Cumplir con estándares WCAG para inclusión
- **SEO Optimizado**: Estructura semántica para mejor posicionamiento
- **Responsive Design**: Experiencia óptima en todos los dispositivos
- **Temática Ganadera**: Paleta de colores verde relacionada con naturaleza y ganadería

## 🏗️ Estructura del Proyecto

```
ganavent/
├── index.html          # Estructura HTML principal
├── styles.css          # Hoja de estilos CSS
├── script.js           # Funcionalidad JavaScript
├── img/                # Carpeta de imágenes
│   └── hero-bg.jpg     # Imagen de fondo del hero
├── logo.png            # Logo de la marca
├── portada.png         # Imagen del showcase
└── README.md           # Documentación del proyecto
```

## 🎨 Paleta de Colores (Temática Verde/Ganadería)

### Colores Principales
- **Verde Muy Oscuro**: `#0D3B0D` - Navegación, sombras profundas
- **Verde Oscuro**: `#1B5E20` - Títulos, texto principal, acentos
- **Verde Medio**: `#2E7D32` - Subtítulos, texto secundario
- **Verde Vibrante**: `#4CAF50` - Botones CTA, iconos, elementos destacados
- **Verde Claro**: `#66BB6A`, `#81C784` - Hover, elementos interactivos
- **Verde Pastel**: `#A5D6A7` - Subtítulos hero
- **Verde Muy Claro**: `#C8E6C9` - Fondo showcase
- **Verde Pálido**: `#E8F5E9` - Fondo general (pasto)

### Colores de Apoyo
- **Blanco**: `#ffffff` - Texto sobre fondos oscuros
- **Degradados**: Variaciones de verde para efectos visuales

### Significado de la Paleta
- **Naturaleza**: Representa pastos, campos y vegetación
- **Crecimiento**: Simboliza desarrollo y prosperidad
- **Frescura**: Indica calidad y productos naturales
- **Sostenibilidad**: Refleja prácticas ganaderas responsables

## 🎨 Características de Diseño

### Presentación Visual Profesional
- **Logo**: Marco elegante con fondo semitransparente y efectos hover
- **Imágenes**: Marcos con degradados, sombras verdes y bordes redondeados
- **Tarjetas**: Efecto glassmorphism con backdrop-filter y sombras profundas
- **Iconos**: Círculos con degradados, sombras y rotación al hover
- **Checkmarks**: Diseño circular con fondo y bordes verdes
- **Interactividad**: Transiciones suaves y efectos de elevación

### Tipografía
- **Fuente Principal**: Montserrat (Google Fonts)
- **Pesos Utilizados**: 400 (regular), 600 (semibold), 700 (bold), 800 (extra bold), 900 (black)

### Animaciones
- **fadeInUp**: Entrada desde abajo para elementos del hero
- **pulse**: Efecto de pulso en el nombre de la marca
- **expandLine**: Expansión de línea decorativa
- **bounce**: Rebote para elementos de CTA
- **Hover effects**: Elevación, escalado, rotación en elementos interactivos

## 📄 Estructura HTML

### Secciones Principales

1. **Navegación Principal**
   - Logo de la marca
   - Menú de enlaces ancla
   - Efecto glassmorphism con backdrop-filter
   - Fondo verde muy oscuro

2. **Hero (Portada)**
   - Título principal con degradado verde (H1)
   - Subtítulo en verde pastel (H2)
   - Descripción del servicio
   - Botón CTA verde vibrante con flecha animada
   - Elemento decorativo circular verde
   - Fondo con degradado verde (pradera)

3. **Características**
   - Grid de 3 tarjetas
   - Iconos SVG en verde
   - Efectos hover con elevación
   - Fondo degradado verde oscuro a medio

4. **Showcase de Productos**
   - Layout de 2 columnas
   - Imagen del servicio
   - Lista de características con checkmarks verdes
   - Fondo verde muy claro (pasto fresco)

## 🎨 Estructura CSS

### Organización del Código

El CSS está organizado en secciones claramente definidas con comentarios detallados:

```css
/* ===========================================
   NOMBRE DE SECCIÓN
   ===========================================
   Función: Propósito de la sección
   Características: Detalles importantes
   Temática: Relación con ganadería/naturaleza
   =========================================== */
```

### Secciones CSS

1. **Reset y Configuración Base**
   - Eliminación de estilos predeterminados
   - Configuración global del body (fondo verde pálido)

2. **Navegación Principal**
   - Barra fija con efecto blur
   - Fondo verde muy oscuro
   - Enlaces con animación de underline verde

3. **Sección Hero**
   - Fondo con degradado verde (pradera)
   - Título con degradado verde claro
   - Animaciones de entrada (fadeInUp)
   - Botón CTA verde vibrante con flecha animada

4. **Características**
   - Grid responsive
   - Tarjetas con iconos circulares verdes
   - Efectos hover interactivos
   - Líneas decorativas verdes

5. **Showcase de Productos**
   - Layout de 2 columnas
   - Imagen con zoom al hover
   - Lista de características con checkmarks verdes
   - Fondo verde muy claro

6. **Animaciones Keyframes**
   - fadeInUp: Entrada desde abajo
   - pulse: Pulso para marca (respiración natural)
   - bounce: Rebote constante
   - expandLine: Expansión de línea

7. **Diseño Responsive**
   - Tablets (max-width: 768px)
   - Móviles (max-width: 480px)

## 🔧 Funcionalidad JavaScript

### Funciones Implementadas

```javascript
// Scroll suave a secciones
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Comportamiento de scroll suave en enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});
```

## ♿ Accesibilidad

### Características de Accesibilidad Implementadas

- **Etiquetas ARIA**: `role`, `aria-label`, `aria-labelledby`
- **Navegación por Teclado**: Focus visible en elementos interactivos
- **Texto Alt**: Descripciones en todas las imágenes
- **Contraste de Colores**: Cumple con estándares WCAG AA (tonos verde)
- **Estructura Semántica**: Uso correcto de etiquetas HTML5
- **Screen Readers**: Contenido oculto con `aria-hidden="true"`

## 🔍 SEO Optimización

### Meta Tags Implementados

```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="GANAVENT">
<meta name="robots" content="index, follow">
```

### Mejores Prácticas SEO

- Un solo H1 por página
- Jerarquía de encabezados correcta (H1 → H2 → H3)
- Texto descriptivo en enlaces
- Imágenes con atributos alt
- URL amigables con enlaces ancla

## 📱 Responsive Design

### Breakpoints

- **Desktop**: > 768px
- **Tablets**: 481px - 768px
- **Móviles**: ≤ 480px

### Adaptaciones por Dispositivo

- **Tablets**: Menú vertical (verde oscuro), grids de 1 columna
- **Móviles**: Textos reducidos, padding compacto, elementos decorativos ocultos

## 🚀 Cómo Usar

### Instalación

1. Clonar o descargar el proyecto
2. Abrir `index.html` en un navegador web
3. Opcional: Usar un servidor local para mejor desarrollo

### Personalización

1. **Colores**: Modificar variables CSS en `styles.css` (paleta verde)
2. **Imágenes**: Reemplazar archivos en la carpeta `img/`
3. **Texto**: Editar contenido en `index.html`
4. **Animaciones**: Ajustar tiempos y efectos en `@keyframes`

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y animaciones
- **JavaScript (ES6+)**: Interactividad
- **Google Fonts**: Tipografía Montserrat
- **SVG**: Iconos vectoriales (color verde)

## 📝 Notas de Desarrollo

### Convenciones de Código

- **HTML**: Indentación de 4 espacios, minúsculas para clases
- **CSS**: BEM naming convention, comentarios detallados
- **JavaScript**: ES6+, funciones arrow cuando sea apropiado

### Comentarios en el Código

Cada sección del código incluye comentarios detallados que explican:
- **Función**: Qué hace el elemento
- **Propósito**: Por qué existe
- **Características**: Detalles importantes
- **Temática**: Relación con naturaleza/ganadería
- **Interacción**: Comportamiento al hover/focus

## 🐛 Problemas Conocidos

- La imagen `hero-bg.jpg` debe estar en la carpeta `img/` para que el fondo se muestre correctamente
- El diagrama de cortes (`meat-cuts-diagram.png`) es opcional y decorativo

## 🌿 Temática Ganadera

La paleta de colores verde fue seleccionada para representar:
- **Pastos y Campos**: Los tonos verdes evocan praderas naturales
- **Naturaleza**: Conexión con el medio ambiente
- **Crecimiento**: Simboliza el desarrollo del ganado
- **Frescura**: Indica productos naturales y de calidad
- **Sostenibilidad**: Refleja prácticas responsables

## 📞 Soporte

Para preguntas o sugerencias, contactar al equipo de desarrollo de GANAVENT.

## 📄 Licencia

Este proyecto es propiedad de GANAVENT. Todos los derechos reservados.

---

**Versión**: 3.0 - Temática Ganadera (Verde)  
**Última Actualización**: Mayo 2026  
**Autor**: GANAVENT Team
