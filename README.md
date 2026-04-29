# 🗺️ UNIVOmap — Navega el campus como un experto

<div align="center">

![UNIVOmap Banner](https://img.shields.io/badge/UNIVOmap-Universidad%20de%20Oriente-185FA5?style=for-the-badge&logo=googlemaps&logoColor=white)

**El mapa interactivo oficial de la Universidad de Oriente (UNIVO)**  
*San Miguel, El Salvador*

[![HTML](https://img.shields.io/badge/HTML5-41.5%25-E34F26?style=flat-square&logo=html5&logoColor=white)](https://github.com/leninalejan/Landinpage-UnivoMap)
[![CSS](https://img.shields.io/badge/CSS3-58.5%25-1572B6?style=flat-square&logo=css3&logoColor=white)](https://github.com/leninalejan/Landinpage-UnivoMap)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)]()

</div>

---

## 📋 Descripción

**UNIVOmap** es una landing page y herramienta que servira para la introduccion a un proyecto de mapeo universitario diseñada para estudiantes, docentes y visitantes de la **Universidad de Oriente (UNIVO)**. Permite navegar el campus de forma clara, rápida e intuitiva, mostrando la ubicación de aulas, laboratorios, facultades, cafeterías y más.

El proyecto nace de la necesidad de orientar a quienes ingresan por primera vez al campus, eliminando la confusión y el tiempo perdido buscando espacios académicos.

---

## ✨ Características principales

| Característica | Descripción |
|---|---|
| 🧭 **Navegación GPS** | Ubícate dentro del campus al instante con mapas detallados de alta precisión |
| 📋 **Directorio completo** | Todas las facultades, laboratorios, cafeterías y oficinas en un solo lugar |
| 🔀 **Rutas internas** | Calcula el camino más corto entre dos puntos del campus paso a paso |
| 📅 **Horarios y eventos** | Integración con el calendario académico de la universidad |
| 📱 **Diseño móvil** | Completamente optimizado para iOS y Android |
| 📷 **Escaneo QR** | Cada edificio tiene un código QR que abre su ubicación automáticamente |
| 🌙 **Modo oscuro** | Soporte completo de tema claro/oscuro con persistencia en `localStorage` |

---

## 🏛️ Espacios mapeados

- 🔵 **Facultad de Ingeniería y Arquitectura** — Aulas disponibles
- 🟣 **Rectoría y Administración Central** — Gestión académica
- 🟢 **Biblioteca Central UNIVO** — Horarios disponibles
- 🟡 **Laboratorios de Ciencias** — Equipos especializados
- 🔴 **Cafetería Campus Central** — Lun–Vie 7am–6pm
- 🩷 **Auditorio Principal** — Capacidad para 300 personas

> **40+ edificios mapeados · 5 facultades · 200+ aulas identificadas · 100% gratuito**

---

## 🚀 Cómo funciona

```
1. Abre UNIVOmap  →  Accede desde el navegador o descarga la app. Sin cuenta necesaria.
2. Busca tu destino  →  Escribe el nombre del edificio, aula o servicio.
3. Obtén la ruta  →  El mapa calcula el camino más corto desde tu posición.
4. ¡Llegaste!  →  Navega con confianza por toda la universidad.
```

---

## 🗂️ Estructura del proyecto

```
Landinpage-UnivoMap/
│
├── index.html          # Página de entrada principal
├── landingpage.html    # Landing page completa con todas las secciones
├── landing.css         # Estilos globales, variables CSS y modo oscuro
└── logo.png            # Logotipo oficial de UNIVOmap
```

---

## 🛠️ Tecnologías utilizadas

- **HTML5** — Estructura semántica accesible (uso de `aria-label`, `aria-expanded`, `skip links`)
- **CSS3** — Variables CSS, diseño responsive, animaciones y soporte de tema oscuro/claro
- **JavaScript vanilla** — Menú móvil, toggle de tema y persistencia con `localStorage`
- **Google Fonts** — Tipografías `DM Serif Display` y `DM Sans`
- **SVG inline** — Mapa del campus renderizado en SVG con animaciones CSS

---

## ⚙️ Instalación y uso local

No requiere ningún build system ni dependencias externas. Sigue estos pasos:

```bash
# 1. Clona el repositorio
git clone https://github.com/leninalejan/Landinpage-UnivoMap.git

# 2. Entra al directorio
cd Landinpage-UnivoMap

# 3. Abre el archivo en tu navegador
open landingpage.html
# o en Windows:
start landingpage.html
```

> Para una mejor experiencia de desarrollo, se recomienda usar la extensión **Live Server** en VS Code.

---

## 📸 Vista previa

```
┌─────────────────────────────────────────────┐
│  🗺️  UNIVOmap  |  Características  |  ...  │
├─────────────────────────────────────────────┤
│                                             │
│   Navega el campus          [Mapa SVG]      │
│   como un experto           Animado con     │
│                             edificios y     │
│   [Explorar el campus]      rutas           │
│   [Cómo funciona]                           │
│                                             │
│   40+ edificios · 5 facultades · 200+ aulas │
└─────────────────────────────────────────────┘
```

---

## ♿ Accesibilidad

El proyecto incluye buenas prácticas de accesibilidad web:

- **Skip link** para saltar al contenido principal
- Atributos `aria-label`, `aria-expanded` y `aria-controls` en elementos interactivos
- Roles semánticos en el mapa SVG (`role="img"` con `aria-label`)
- Contraste de colores adecuado en ambos modos (claro y oscuro)
- Navegación completamente funcional por teclado

---

## 📬 Contacto

¿Tienes preguntas o sugerencias sobre el proyecto?

[![WhatsApp](https://img.shields.io/badge/WhatsApp-Contáctanos-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.link/jqraq3)
[![GitHub](https://img.shields.io/badge/GitHub-leninalejan-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/leninalejan)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto:

1. Haz un fork del repositorio
2. Crea una rama con tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m 'feat: agrega nueva funcionalidad'`
4. Sube la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia **MIT**.  
Desarrollado con ❤️ como proyecto estudiantil para la comunidad UNIVO.

---

<div align="center">

© 2026 **UNIVOmap** — Universidad de Oriente, San Miguel, El Salvador  
*Proyecto estudiantil de mapeo universitario*

</div>
