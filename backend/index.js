const express = require('express') // llamar express
const app= express(); // crear la app
const port = 3100; // definciòn de puerto
const bodyParser = require("body-parser");
 // para generar datos fake 
const routerApi = require('./Routes/index')
const {logError , errorHandler, BoomerrorHandler}= require('./middlewares/error.handler')
const whitList = ['http://localhost:3000']
const options = {
    origin: (origin, callback)=>{
        if (whitList.includes(origin)){
            callback(null,true)
        } else{
            callback(new Error('no permitido'))
        }

    }

}
const cors = require('cors')

app.use(express.json())
app.use(cors()) // se hace para habilitar desde cualquer origen
app.get('/', (req,res)=>{
    res.send('hola este es el servidor base')
})


app.listen(port,()=>{
    console.log('el puerto està activado' + port)
}

)

routerApi(app)
app.use(bodyParser.json());
app.use(logError); // toca que este tenga un next
app.use(BoomerrorHandler)
app.use(errorHandler);

