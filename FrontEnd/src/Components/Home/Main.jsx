import React from 'react'
// rfec + enter 
import Logo from '../../assets/img/Form/michi.png'

import { useState } from 'react'

import { servidor } from '../../Services/api'

function Main() {

    const [User, setUser] = useState('')
    const [Password, setPassword] = useState('')
    const [Mensajes, setMensajes] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensajes('')
        try {
            const Resultado = servidor.post('/Login', { User, Password })

            setMensajes(Resultado.data.Mensajes ||
            Resultado.data.error ||
            'Inicio de Sesión Exitoso')

            // console.log(Resultado)
            // setMensajes('Inicio de sesión exitoso')
        }
        catch (error) {
            setMensajes('Error al iniciar sesión')
            //  ? (si)   :(no)
        }
    }
    return (
        <>
            <main className="contenido">
                {Mensajes && <p className='Mensajes'>{Mensajes}</p>}
                <div className="contenedorFormulario">

                    <img src={Logo} alt="img" />

                    <form action="" method="post" className='formLogin' onSubmit={handleSubmit}>
                        <h1>Login</h1>

                        <label htmlFor="User">User:</label>
                        <input type="text" name="User" id="User" value={User} onChange={(e) => setUser(e.target.value)} />

                        <label htmlFor="Password">Password:</label>
                        <input type="password" name="Password" id="Password"
                            value={Password} onChange={(e) => setPassword(e.target.value)} />


                        <input type="submit" value="Ingresar" className='btnIngresar' />

                    </form>

                </div>

            </main>
        </>
    )
}

export default Main