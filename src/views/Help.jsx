import { Link } from "react-router-dom";
import "../help.css";

export default function Help() {
  return (
    <div className="help-page">
      <header className="help-header">
        <div className="help-header-content">
          <h1>Centro de Ayuda · WhatsClone</h1>
          <p>
            Aquí encontrarás información general sobre el funcionamiento del chat,
            las tecnologías utilizadas y algunas ideas para futuras mejoras.
          </p>
          <Link to="/Chat" className="chat-button">Ir al chat</Link>
        </div>
      </header>

      <main className="help-content">
        <section className="help-section">
          <h2>💬 Funcionamiento general del chat</h2>
          <p>
            El chat de WhatsClone permite conversar en tiempo real con otros usuarios.
            Cada mensaje que envías se muestra inmediatamente en pantalla y se sincroniza
            con el servidor para mantener tu historial actualizado.
          </p>
          <ul>
            <li>Puedes enviar y recibir mensajes instantáneos.</li>
            <li>Los mensajes se muestran ordenados por fecha y hora.</li>
            <li>El sistema marca los mensajes como enviados, entregados y leídos.</li>
            <li>Tu sesión se mantiene activa mientras no cierres sesión manualmente.</li>
          </ul>
        </section>

        <section className="help-section">
          <h2>⚙️ Tecnologías utilizadas</h2>
          <p>
            Esta aplicación fue desarrollada con herramientas modernas que facilitan el
            rendimiento y la organización del código:
          </p>
          <ul>
            <li><strong>React.js</strong> — para construir la interfaz y los componentes del chat.</li>
            <li><strong>Vite</strong> — como entorno de desarrollo rápido y eficiente.</li>
            <li><strong>React Router</strong> — para la navegación entre vistas.</li>
            <li><strong>CSS nativo</strong> — para los estilos y diseño adaptable.</li>
            <li><strong>LocalStorage</strong> — para guardar la sesión del usuario.</li>
          </ul>
        </section>

        <section className="help-section">
          <h2>🚀 Posibles mejoras futuras</h2>
          <p>Algunas ideas para seguir mejorando la aplicación:</p>
          <ul>
            <li>Agregar autenticación real con Firebase o Auth0.</li>
            <li>Incluir notificaciones push en tiempo real.</li>
            <li>Soporte para envío de imágenes, audios y documentos.</li>
            <li>Optimizar el rendimiento usando WebSockets.</li>
            <li>Diseño adaptable con modo claro y oscuro.</li>
          </ul>
        </section>
      </main>

      <footer className="help-footer">
        <p>Hecho con 💚 por el equipo de desarrollo de WhatsClone.</p>
        <p>Versión 1.0 — {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
