const {ConexionBD}=require('../DataBase/db')

const RegistrarUsuario=(req,res)=>{
    const{User,Password,Name}=req.body;
    try{
        // --> ! Validar que los campos no estén vacíos
        if(!User || !Password){
            console.log('Debe Completar los Datos para Continuar')
            return res.status(404).json({error:'Debe completar el Usuario y/o la Contraseña'})
        }
        // --> Consulta para verificar si el usuario ya está registrado
        const Buscar=`SELECT * FROM Usuarios WHERE User=?`
        ConexionBD.get(Buscar,[User],(error,Perfil)=>{
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
            ConexionBD.run(Query2,[User,Password,Name],(error)=>{
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

module.exports={RegistrarUsuario}