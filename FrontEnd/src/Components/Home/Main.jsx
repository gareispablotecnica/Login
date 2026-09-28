import React from 'react'
// rfec + enter 
import Logo from '../../assets/img/Form/michi.png'
function Main() {
  return (
    <>
        <main className="contenido">
            <div className="contenedorFormulario">
                
                <img src={Logo} alt="img" />

                <form action="" method="post" className='formLogin'>
                    <h1>Login</h1>

                    <label htmlFor="User">User:</label>
                    <input type="text" name="User" id="User" />

                    <label htmlFor="Password">Password:</label>
                    <input type="password" name="Password" id="Password" />

                    <input type="submit" value="Ingresar" className='btnIngresar' />

                </form>
            </div>
        </main>
    </>
  )
}

export default Main