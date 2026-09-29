import React, { useState } from 'react'

import Gatito from '../../assets/img/Form/michi-feliz.svg'

const IconoUsuario = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const IconoNombre = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M7 9h10M7 13h6" />
  </svg>
)

const IconoCandado = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="10" width="16" height="11" rx="2.5" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
)

const IconoOjo = ({ abierto }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
    {!abierto && <path d="M3 3l18 18" />}
  </svg>
)

const IconoCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12.5 9 17.5 20 6.5" />
  </svg>
)

const fuerzaPassword = (valor) => {
  let puntos = 0
  if (valor.length >= 8) puntos++
  if (/[A-Z]/.test(valor) && /[a-z]/.test(valor)) puntos++
  if (/\d/.test(valor)) puntos++
  if (/[^A-Za-z0-9]/.test(valor)) puntos++
  return puntos
}

const ETIQUETAS_FUERZA = ['Muy debil', 'Debil', 'Regular', 'Buena', 'Segura']

function RegistroUsuario() {
  const [User, setUser] = useState('')
  const [Name, setName] = useState('')
  const [Password1, setPassword1] = useState('')
  const [Password, setPassword] = useState('')
  const [verPassword1, setVerPassword1] = useState(false)
  const [verPassword, setVerPassword] = useState(false)

  const fuerza = fuerzaPassword(Password1)
  const coincide = Password1.length > 0 && Password1 === Password

  return (
    <main className="contenido">
     –
        <figure className="registro-arte">
          <img src={Gatito} alt="Michi feliz yin yang" />
          <span className="registro-arte-velo" aria-hidden="true" />
          <figcaption className="registro-arte-texto">
            <span className="registro-insignia">Nexo</span>
            <h2 className="registro-arte-titulo">Tu espacio de trabajo, en un minuto</h2>
            <p className="registro-arte-descripcion">
              Gestioná proyectos, archivos y equipo desde una sola plataforma.
            </p>
            <ul className="registro-arte-lista">
              <li><IconoCheck /> Acceso desde cualquier dispositivo</li>
              <li><IconoCheck /> Soporte en español, todos los dias</li>
              <li><IconoCheck /> Tus datos siempre protegidos</li>
            </ul>
          </figcaption>
        </figure>

        <form action="" method="post" className="formRegistro" noValidate>

          <header className="formRegistro-cabecera">
            <p className="formRegistro-kicker">Cuenta nueva</p>
            <h1 className="formRegistro-titulo">Registrate en <span>Nexo</span></h1>
            <p className="formRegistro-subtitulo">Solo tres pasos y ya vas a poder empezar.</p>
          </header>

          <div className="formRegistro-campo">
            <label htmlFor="User">Usuario</label>
            <div className="reg-input">
              <span className="reg-input-icono"><IconoUsuario /></span>
              <input
                type="text"
                name="User"
                id="User"
                placeholder="tu.usuario"
                autoComplete="username"
                value={User}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="formRegistro-campo">
            <label htmlFor="Name">Nombre y apellido</label>
            <div className="reg-input">
              <span className="reg-input-icono"><IconoNombre /></span>
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Ada Lovelace"
                autoComplete="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="formRegistro-campo">
            <label htmlFor="Password1">Password</label>
            <div className="reg-input">
              <span className="reg-input-icono"><IconoCandado /></span>
              <input
                type={verPassword1 ? 'text' : 'password'}
                name="Password1"
                id="Password1"
                placeholder="Minimo 8 caracteres"
                autoComplete="new-password"
                value={Password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
              />
              <button
                type="button"
                className="reg-input-accion"
                onClick={() => setVerPassword1((v) => !v)}
                aria-label={verPassword1 ? 'Ocultar password' : 'Mostrar password'}
              >
                <IconoOjo abierto={verPassword1} />
              </button>
            </div>

            {Password1.length > 0 && (
              <div className="reg-fuerza">
                <div className="reg-fuerza-barras">
                  {[1, 2, 3, 4].map((n) => (
                    <span key={n} className={fuerza >= n ? `activa nivel-${fuerza}` : ''} />
                  ))}
                </div>
                <p className="reg-fuerza-texto">Seguridad: {ETIQUETAS_FUERZA[fuerza]}</p>
              </div>
            )}
          </div>

          <div className="formRegistro-campo">
            <label htmlFor="Password">Repetir password</label>
            <div className={`reg-input ${coincide ? 'es-valido' : ''} ${Password.length > 0 && !coincide ? 'es-invalido' : ''}`}>
              <span className="reg-input-icono"><IconoCandado /></span>
              <input
                type={verPassword ? 'text' : 'password'}
                name="Password"
                id="Password"
                placeholder="Repeti tu password"
                autoComplete="new-password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="reg-input-accion"
                onClick={() => setVerPassword((v) => !v)}
                aria-label={verPassword ? 'Ocultar password' : 'Mostrar password'}
              >
                <IconoOjo abierto={verPassword} />
              </button>
            </div>

            {Password.length > 0 && (
              <p className={`reg-aviso ${coincide ? 'es-valido' : 'es-invalido'}`}>
                {coincide ? 'Las passwords coinciden' : 'Las passwords no coinciden'}
              </p>
            )}
          </div>

          <input type="submit" value="Crear mi cuenta" className="btnRegistro" />

          <p className="formRegistro-pie">
            ¿Ya tenes cuenta? <a href="">Ingresá acá</a>
          </p>

        </form>

      </section>
    </main>
  )
}

export default RegistroUsuario
