function logError(err, req, res,next){  //middle are para consolar
    console.error(err);
    next(err)
}

function errorHandler(error,req,res,next){ //asì no se utilice next toa ponerlo
res.status(500).json(
   { message: error.message,
stack: error.stack}
)

}


function BoomerrorHandler(error,req,res,next){ //middle ware si es de tipo boom aplique eso
    if(error.isBoom){
        const {output} = error;
        res.status(output.statusCode).json(output.payload)

    }else{
       next(error) 
    }
   
    
    
    }

module.exports = {logError , errorHandler, BoomerrorHandler}