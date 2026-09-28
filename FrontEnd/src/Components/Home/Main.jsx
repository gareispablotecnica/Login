import React from 'react'
// rfec + enter 
import Logo from '../../assets/img/Form/michi.png'

import { useState,useEffect } from 'react'

function Main() {

    const[User,setUser]=useState('')
    const[Password,setPassword]=useState('')
    const[Mensajes,setMensajes]=useState('')

  return (
    <>
        <main className="contenido">
            <div className="contenedorFormulario">
                
                <img src={Logo} alt="img" />

                <form action="" method="post" className='formLogin'>
                    <h1>Login</h1>

                    <label htmlFor="User">User:</label>
                    <input type="text" name="User" id="User" value={User} onChange={setUser((e)=>e.target.value)}/>

                    <label htmlFor="Password">Password:</label>
                    <input type="password" name="Password" id="Password" 
                    value={Password} onChange={setPassword((e)=>e.target.value)} />

                    <input type="submit" value="Ingresar" className='btnIngresar' />

                </form>
            </div>
        </main>
    </>
  )
}

export default Main