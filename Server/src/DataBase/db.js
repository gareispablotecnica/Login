const Ubicacion= require('path')
const fs=require('fs')
const SQLite3=require('sqlite3')

// --> resolve: se encarga de unir rutas de archivos y carpetas
let DataBase_Ubicacion= Ubicacion.resolve(__dirname,'./Urban.db')

// --> En Vercel el disco del proyecto es de solo lectura: se copia la BD a /tmp (temporal, NO persistente)
if(process.env.VERCEL){
    const Temporal='/tmp/Urban.db'
    if(!fs.existsSync(Temporal) && fs.existsSync(DataBase_Ubicacion)){
        fs.copyFileSync(DataBase_Ubicacion,Temporal)
    }
    DataBase_Ubicacion=Temporal
}

const ConexionBD= new SQLite3.Database(DataBase_Ubicacion,(error)=>{
    if(error){
        console.error('No se pudo crear correctamente la Base de Datos',error)
    }
    else{
        console.log('Base de Datos creada Correctamente ✅')
        ConexionBD.exec(
            `CREATE TABLE IF NOT EXISTS Usuarios(
                IDUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
                User TEXT NOT NULL UNIQUE,
                Password TEXT NOT NULL,
                Name TEXT NOT NULL
            )`,(error)=>{
                if(error){
                    console.error('Error al Crear la Tabla Usuarios ⛔',error.message)
                }
                else{
                    console.log('Tabla Usuarios creada Correctamente ✅')
                }
            }
        )
        ConexionBD.exec(
            `CREATE TABLE IF NOT EXISTS Productos(
                IDProducto INTEGER PRIMARY KEY AUTOINCREMENT,
                Nombre TEXT NOT NULL,
                Precio FLOAT NOT NULL,
                Stock INTEGER NOT NULL,
                Descripcion TEXT NOT NULL,
                Imagen TEXT
            )`,(error)=>{
                if(error){
                    console.error('Error al Crear la Tabla Productos ⛔',error.message)
                }
                else{
                    console.log('Tabla Productos creada Correctamente ✅')
                }
            }
        )
    }
})

module.exports={ConexionBD}