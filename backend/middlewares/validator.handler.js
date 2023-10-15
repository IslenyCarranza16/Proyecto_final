
const boom = require('@hapi/boom')
function validatorHandler (schema , property){ //esto se hace para crear un middleware de forma dinamica , qu depende el esquema y la propiedad que recibe que se define como params, query o body
  return (req, res,next) =>{
    const data= req[property] // la informaciòn varia dependiendo dee que request se haga 
    const {error} = schema.validate(data, {abortEarly: false}) // validar si la informacion si se valida de acuerdo al esquema  El abortearly se hace para que se muestren todos los errores de forma conjuta 
    if (error){
        next(boom.badRequest(error))

    }
  }
   next(); // si no hay error siga con los midleware 
    
    }


    module.exports= validatorHandler;