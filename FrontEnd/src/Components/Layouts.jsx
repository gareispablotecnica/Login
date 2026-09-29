import React from 'react'
import Header from './Home/Header'
import './Layouts.css'
import Footer from './Home/Footer'
// import Res from './Pages/RegistroUsuario.jsx'
import Main from './Home/Main'

function Layouts() {
  return (
    <div className="pagina">
        <Header />
        {/* <Res /> */}
        <Main />
        <Footer />
    </div>
  )
}

export default Layouts