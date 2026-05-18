// ===========================================
// JAVASCRIPT - GANAVENT LANDING PAGE
// ===========================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // ===========================================
    // SMOOTH SCROLLING PARA NAVEGACIÓN
    // ===========================================
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Agregar evento click a cada enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir comportamiento por defecto
            
            // Obtener el ID del destino del enlace
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Si la sección existe, hacer scroll suave
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================================
    // FUNCIONALIDAD DEL BOTÓN PRINCIPAL (CTA)
    // ===========================================
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Intentar ir a la sección de productos
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Si no existe, ir a la sección de características
                const featuresSection = document.querySelector('.features');
                if (featuresSection) {
                    featuresSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    // ===========================================
    // EFECTO SCROLL EN BARRA DE NAVEGACIÓN
    // ===========================================
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            // Hacer la navbar más opaca al hacer scroll
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            // Restaurar transparencia inicial
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // ===========================================
    // OBSERVADOR DE INTERSECCIÓN PARA ANIMACIONES
    // ===========================================
    const observerOptions = {
        threshold: 0.1, // Activar cuando 10% del elemento sea visible
        rootMargin: '0px 0px -50px 0px' // Margen para activar antes
    };

    // Crear el observador
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Elemento visible - activar animación
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // ===========================================
    // APLICAR OBSERVADOR A ELEMENTOS
    // ===========================================
    const featureCards = document.querySelectorAll('.feature-card');
    const productShowcase = document.querySelector('.showcase-container');
    
    // Preparar tarjetas de características para animación
    featureCards.forEach((card, index) => {
        card.style.opacity = '0'; // Ocultar inicialmente
        card.style.transform = 'translateY(30px)'; // Posición inicial
        card.style.transition = `all 0.6s ease ${index * 0.1}s`; // Retraso escalonado
        observer.observe(card); // Comenzar a observar
    });

    // Preparar showcase de productos para animación
    if (productShowcase) {
        productShowcase.style.opacity = '0';
        productShowcase.style.transform = 'translateY(30px)';
        productShowcase.style.transition = 'all 0.8s ease';
        observer.observe(productShowcase);
    }
});

// ===========================================
// EFECTOS HOVER ADICIONALES
// ===========================================

// Agregar efecto hover mejorado a las tarjetas de características
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Elevación adicional al pasar el mouse
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        // Restaurar posición original
        this.style.transform = 'translateY(-10px) scale(1)';
    });
});

// ===========================================
// EFECTO PARALLAX EN SECCIÓN HERO
// ===========================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        // Efecto parallax: el contenido se mueve más lento que el scroll
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        // Desvanecer contenido al hacer scroll
        heroContent.style.opacity = 1 - scrolled / 600;
    }
});

// ===========================================
// EFECTO DE ESCRITURA PARA TÍTULO HERO
// ===========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar efecto de escritura cuando la página carga
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Pequeño retraso para mejor efecto
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// ===========================================
// FUNCIONES UTILES ADICIONALES
// ===========================================

// Función para verificar si un elemento está en viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para agregar clase activa a navegación según sección visible
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// Actualizar navegación activa al hacer scroll
window.addEventListener('scroll', updateActiveNavigation);

// ===========================================
// MANEJO DE ERRORES Y DEBUG
// ===========================================

// Manejar errores de JavaScript
window.addEventListener('error', function(e) {
    console.error('Error en JavaScript:', e.error);
    // Aquí podrías agregar lógica para mostrar un mensaje amigable al usuario
});

// Debug: mostrar información en consola
console.log('GANAVENT Landing Page - JavaScript cargado correctamente');
