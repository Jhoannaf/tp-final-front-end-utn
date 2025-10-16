import { useState, useEffect } from "react"
import { useChat } from "../context/ChatContext"
import { Link, useNavigate } from "react-router-dom"

export default function Chat() {
  const [msg, setMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const { users, selectedUser, setUsers, setSelectedUser } = useChat()
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactList , setContactList] = useState(false)
  const [activeUser, setActiveUser] = useState(null);

  const user = users.find(u => u.id === selectedUser)

  const navigate = useNavigate()

  // ✅ NUEVO: mostrar lista en mobile si no hay chat seleccionado
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setContactList(false)
      } else {
        if (!selectedUser && !activeUser) {
          setContactList(true)
        }
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [selectedUser, activeUser])

useEffect(() => {
  const savedId = localStorage.getItem("selectedUserId")
  if (savedId) {
    const savedUser = users.find(u => u.id === savedId)
    if (savedUser) {
      setActiveUser(savedUser)
      setSelectedUser(savedUser.id)
    }
  }
}, [users, setSelectedUser])


  // Si estamos en mobile y no hay chat, mostrar la lista directamente
  if (window.innerWidth <= 480 && !activeUser && !selectedUser) {
    return (
      <section className="contact-list">
        <h2>Lista de contactos</h2>
        {users.map((u) => (
          <div
            key={u.id}
            className="contact-item"
            onClick={() => handleSelectContact(u)}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt={u.name}
              className="contact-avatar"
            />
            <strong>{u.name}</strong>
          </div>
        ))}
      </section>
    )
  }

// ✅ Si no hay usuario seleccionado: mostrar lista en mobile o mensaje en desktop
if (!user) {
  if (window.innerWidth <= 480) {
    return (
      <section className="contact-list">
        <h2>Lista de contactos</h2>
        {users.map((u) => (
          <div
            key={u.id}
            className="contact-item"
            onClick={() => handleSelectContact(u)}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt={u.name}
              className="contact-avatar"
            />
            <strong>{u.name}</strong>
          </div>
        ))}
      </section>
    )
  }

  return (
    <div className="user-not-found">
      <p>No hay usuario seleccionado...</p>
    </div>
  )
}


  // 3. Manejo del input
  const handleChange = (event) => {
    setMsg(event.target.value)
  }

  // 4. Cuando enviamos el formulario
  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
      const currentUser = activeUser || users
      if (!currentUser) return 

    // ✅ Actualizamos el estado 
    const updatedUsers = users.map(u =>
      u.id === user.id
        ? { ...u, messages: [...u.messages, newMessage] }
        : u
    )
    setUsers(updatedUsers) // esto dispara el useEffect del contexto que guarda en localStorage
    setMsg("")
  }

  const handleLogout = ()=> {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }
  
  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }
  const handleMenu =() => {
      setMenuOpen(!menuOpen)
    }
  const handleBackContactList = () => {
    setContactList(!contactList)
  }
  const handleSelectContact = (u) => {
  setActiveUser(u)
  setSelectedUser(u.id)
  setContactList(false)
}

  return (
    <>
{
  showPopup === true && (
    <section className="cont-popup">
      <div className="popup">
        <h2>Popup setting</h2>

        {/* 🔹 Contenedor de las opciones */}
        <div className="popup-content">
          <div className="option-group">
            <label><input type="checkbox" /> Activar notificaciones</label>
            <label><input type="checkbox" /> Modo oscuro</label>
          </div>

          <div className="option-group">
            <label>
              Idioma:
              <select>
                <option>Español</option>
                <option>Inglés</option>
                <option>Portugués</option>
              </select>
            </label>

            <label>
              Tamaño de fuente:
              <select>
                <option>Pequeño</option>
                <option>Mediano</option>
                <option>Grande</option>
              </select>
            </label>
          </div>

          <div className="popup-buttons">
            <button>Guardar cambios</button>
            <button>Restablecer</button>
          </div>
        </div>

        <button onClick={handleClosePopup}>Cerrar</button>
      </div>
    </section>
  )
}

      
      {!contactList ? ( <div className="chat">
      <header className="chat-header">
        <div>
          <div className="chat-user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt={(activeUser || user).name}
              className="chat-avatar"
            />
            <strong>{(activeUser || user).name}</strong>
            {(activeUser || user).lastSeen !== "" && <span className="last-seen">Last seen: {(activeUser || user).lastSeen}</span>}
          </div>
        </div>
        {
          <button className="menu-toggle" onClick={handleMenu}>☰</button>
        }
        {
          <button className="back-contact-list" onClick={handleBackContactList}>‹ volver</button>
        }
        <div className={`chat-actions ${ menuOpen ? "open" : ""}`}>
          <button title="Camera">📷</button>
          <button title="Gallery">🖼️</button>
          <button title="Settings" onClick={handleShowPopup}>⚙️</button>
          <Link to="/Help" title="Help">❓</Link>
          <button onClick={handleLogout}>cerrar sesión</button>
        </div>
      </header>

<section className="chat-messages">
  {(activeUser?.messages || user?.messages)?.map((message) => (
    <div className="message" key={message.id}>
      <p>{message.text}</p>
      <span className="time">{message.time}</span>
    </div>
  ))}
</section>


      <footer className="chat-footer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text here..."
            onChange={handleChange}
            value={msg}
          />
          <button>➤</button>
        </form>
      </footer>
    </div>
      ) : (
        <section className="contact-list">
        <h2>Lista de contactos</h2>
        {users.map((user) => (
          <div key={user.id} className="contact-item" onClick={() => handleSelectContact(user)}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt={user.name}
              className="contact-avatar"
            />
            <strong>{user.name}</strong>
          </div>
        ))}
      </section>
    )}
  </>
);
}
