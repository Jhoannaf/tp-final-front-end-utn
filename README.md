# 💬 WhatsApp Clone — React + Vite

Este proyecto es un **clon de WhatsApp Web** que replica la experiencia de mensajería: lista de contactos, selección de chat, envío de mensajes y comportamiento **responsivo** (vista de escritorio y móvil). Además incluye un **popup de configuración** con opciones estáticas (tema, idioma, notificaciones y privacidad) para ejemplificar cómo se integraría un panel de ajustes dentro de la app.

---

## 🧠 Descripción general

- Interfaz inspirada en WhatsApp Web con **dos paneles** en escritorio (contactos y conversación) y **vista alterna** en móvil.
- **Estado global** con React Context (usuarios, usuario/chat seleccionado, etc.).
- **Mensajería simulada** en memoria: la UI refleja el envío/recepción sin backend.
- **Popup de configuración**: opciones visuales estáticas para validar layout y UX.

---

## 🧰 Tecnologías utilizadas

- ⚛️ **React** — construcción de interfaz.
- ⚡ **Vite** — entorno de desarrollo y bundling.
- 💅 **CSS** — estilos limpios y responsivos.
- 🧭 **Context API** — manejo de estado global sin prop drilling.

---

## 🚀 Cómo iniciar el proyecto

1. **Clonar** el repositorio y entrar en la carpeta del proyecto.
2. **Instalar dependencias** con tu gestor preferido (npm o pnpm).
3. **Levantar el entorno** de desarrollo (comando “dev” de Vite).
4. **Abrir el navegador** en la URL local que indica la terminal (habitualmente `http://localhost:5173`).

> Sugerencia: mantené el mismo gestor de paquetes (npm o pnpm) para todo el ciclo.

---

## 🖥️ Estructura general (componentes)

- **Sidebar.jsx** → lista de contactos con buscador.
- **Chat.jsx** → ventana principal del chat (mensajes enviados/recibidos).
- **ChatContext.jsx** → estados globales: usuarios, seleccionado, etc.
- **PopupSettings.jsx** → modal con opciones de configuración (estáticas).

---

## 🧩 Comportamiento clave

- **Renderizado condicional**: muestra lista o chat según el usuario seleccionado.
- **Responsive**:
  - Escritorio → lista + conversación simultáneas.
  - Móvil → vista alterna (solo lista o solo conversación).
- **Organización visual** del popup: secciones de General, Apariencia/Idioma, Notificaciones y Privacidad.

---

## ⚙️ Popup de configuración (estático)

- **General**: activar notificaciones, modo oscuro, mostrar consejos al iniciar.
- **Apariencia/Idioma**: idioma, tema (claro/oscuro/sistema), tamaño de fuente.
- **Notificaciones**: sonido (predeterminado/suave/silencioso) y frecuencia (5/15/30 min).
- **Privacidad**: estado “en línea”, visibilidad de actividad, recordar credenciales.

> Nota: es un panel demostrativo; no persiste datos (ideal para validar diseño y usabilidad).

---

## 🧠 Conceptos aplicados

- **Context API**: simplifica el intercambio de estado entre componentes.
- **Modularidad**: componentes desacoplados y reutilizables.
- **UX enfocada**: jerarquía visual clara, espaciados consistentes, foco en legibilidad.

---

## 🛣️ Roadmap (ideas futuras)

- Persistencia de mensajes y preferencias (localStorage/IndexedDB/Firebase).
- Autenticación de usuarios reales.
- Envío de imágenes, audios, emojis y adjuntos.
- Tema claro/oscuro **real** aplicado a toda la app.
- Tiempo real con **WebSockets** y estados de conexión/lectura.

---

## 👤 Autor

Desarrollado con ❤️ por **Jhoanna Francia**  
Proyecto con fines educativos y de práctica en React y diseño de interfaces modernas.
