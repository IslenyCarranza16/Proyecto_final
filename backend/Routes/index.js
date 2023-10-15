const express = require('express') // llamar express
const favoritesRouter = require('./FavRouter')
const userRouter = require('./UserRouter')


function routerApi(app){ //funcion para usar los datos del product router
    const router = express.Router();
    app.use('/api/v1',router); // poner un  endpoint base
    // para crear un versionamiento del api
 router.use(`/favorites`,favoritesRouter.fav);
 router.use(`/singup`,userRouter.signup);
 router.use(`/login`,userRouter.login);

}


module.exports = routerApi; //  se exporta la funcion