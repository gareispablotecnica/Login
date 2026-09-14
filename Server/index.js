const Express= require('express')
const dotenv=require('dotenv')
const cors= require('cors')

const App=Express()

dotenv.config()

const PORT=process.env.PORT || 3000

App.use(cors())
App.use(Express.json())



App.listen(PORT,()=>{
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
})