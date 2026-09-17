const Express= require('express')
const {RegistrarUsuario}=require('../Controller/Login.Controller')

const Rutas= Express.Router()

// --> Post debido a que se envían datos sensibles como la contraseña del usuario
Rutas.post('/Registrar',RegistrarUsuario)

module.exports=Rutas