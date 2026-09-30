const {ConexionBD}=require('../DataBase/db')

const RegistrarProdutos=async(req,res)=>{
    const{Nombre,Precio,Stock,Descripcion,Imagen}=req.body;
    try{
        if(!Nombre || !Precio || !Stock || !Descripcion ){
            console.error('Debe Completar Todos los Campos')
            return res.status(404).json({error: 'Debe Completar los Campos para Continuar'})
        }
        const Query=`INSERT INTO Productos (Nombre,Precio,Stock,Descriocion,Imagen)VALUES(?,?,?,?,?)`
        ConexionBD.run(Query,[],(error)=>{
            
        })
    }
    catch(error){
        console.error('Error de Servidor')
        return res.status(500).json({error:'Error de Servidor'})
    }
}