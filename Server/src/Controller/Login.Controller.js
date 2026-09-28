const {ConexionBD}=require('../DataBase/db')

const path=require('path')

const {EncriptarPassword,CompararPassword}= require('../Utils/PasswordHash')

// --> async debido a que bcrypt utiliza promesas para generar el hash de la contraseña
const RegistrarUsuario=async(req,res)=>{
    const{User,Password,Name}=req.body;
    try{
        // --> ! Validar que los campos no estén vacíos
        if(!User || !Password){
            console.log('Debe Completar los Datos para Continuar')
            return res.status(404).json({error:'Debe completar el Usuario y/o la Contraseña'})
        }
        // --> Consulta para verificar si el usuario ya está registrado
        const Buscar=`SELECT * FROM Usuarios WHERE User=?`
        ConexionBD.get(Buscar,[User],async(error,Perfil)=>{
            // --> Validar si hubo un error en la consulta
            if(error){
                console.error('Usuario ya registrado ',error)
                return res.status(500).json({error:'Error en la Conexion con el Servidor'})
            }
            // --> Validar si el usuario ya existe
            if(Perfil){
                console.error('usuario')
                return res.status(409).json({error:'Usuario ya Registrado'})
            }
            // --> Consulta para registrar el usuario
            const Query2=`INSERT INTO Usuarios(User,Password,Name) VALUES(?,?,?)`
            
            // --> Encriptar la contraseña antes de guardarla en la base de datos
            const hash= await EncriptarPassword(Password)
            
            ConexionBD.run(Query2,[User,hash,Name],(error)=>{
                // --> Validar si hubo un error al registrar el usuario
                if(error){
                    console.error('Error al registrar el usuario',error)
                    return res.status(500).json({error:'Error en la Conexion con el Servidor'})
                }
                // --> Usuario registrado correctamente
                return res.status(200).json({message:'✅ Usuario Registrado Correctamente'})
            })
        })
    }
    catch(error){
        console.error('Error al registrar el usuario',error)
        return res.status(500).json({error:'Error en la Conexion con el Servidor'})
    }
}


const IniciarSesion=async(req,res)=>{
    const {User,Password}=req.body
    console.log(User)
    try{
        if(!User || !Password){
            console.error('Error: Debe Completar los Campos para continuar')

            return res.status(404).json({error:'Debe Completar los Datos para continuar'})
        }
        const consulta=`SELECT * FROM Usuarios WHERE User=?`
        ConexionBD.get(consulta,[User],async(error,Perfil)=>{
            if(error){
                console.error('Error al Intentar encontrar el Usuario')

                return res.status(404).json({error:'Error al Intentar encontrar el Usuario'})
            }
            if(!Perfil){
                console.error('Usuario no registrado')
                return res.status(401).json({Mensaje:'El Usuario no Registrado'})
            }
            const ValidarPassword = await CompararPassword(Password,Perfil.Password)
            
            if(!ValidarPassword){
                console.error('Error en la Contraseña ', error.message)
                return res.status(401).json({error: 'Error en el Ingreso de la Contraseña'})
            }
            return res.status(200).sendFile(path.join(__dirname,'../status/status200-.png'))
            // return res.status(200).json({Mensaje: 'Bienvenide Lxrd: ',User})

        })
    }
    catch(error){
        console.error('Error de Server')
        return res.status(500).json({error:'Error con el Servidor'})
    }

}

module.exports={RegistrarUsuario,IniciarSesion}