const express = require('express') // llamar express
const cliente = require('../libraries/postgress')
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//const calificacionServices = require('./../services/calificacion.services');

//const validatorHandler = require('./../middlewares/validator.handler'); 
//const {createContractSchema, updateContractschema, getContractSchema} = require('./../schemas/contrato.schema');

// 

exports.signup = async (req, res) => {
    try {
      const { username } = req.body;
      let {password} = req.body;
      let {email} = req.body;
      console.log(password,username,email)
  
      if (!username || !password){
        throw new Error(`Username or Password not provided`);
      }else{
       // password = await bcrypt.hash(password, 12);
          console.log(password)
        //  Take care about the '' in username and password
        cliente.query(`INSERT INTO public.usuarios(id, nombre, correo, password) 
        VALUES (DEFAULT, '${username}', '${email}', '${password}');`, (err, result)=>{
            if(!err){
              res.status(200).json({
                status: 'success'
                }
              )
            }
            else{ console.log(err.message) }
        })
        cliente.end; 
      }
        
     
  
      // Hash the password before save it.
     
    } catch (err) {
      console.log(`⛔⛔⛔ SIGNUP: ${err.message}`);
      res.status(404).json({
        status: 'fail',
        message: err.message,
      });
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password)
        throw new Error(`Please provide email and password`);
        
        cliente.query(`SELECT id, nombre, correo, password FROM public.usuarios WHERE correo='${email}';`, (err, result)=>{
            if(!err){
console.log(result.rows)  
const user = result.rows
const passwordAPI = user[0].password
console.log(password)
console.log(passwordAPI)

    if (!user || password != passwordAPI)
      { throw new Error('Incorrect username or password');
       console.log('Incorrect username or password')
      // 401: Error for user not found */

}else {
  res.status(200).json({
    status: 'success',
  data: {
      user,
    },
  })
 }
            }

         });
         cliente.end;
         
      
  
      
    } catch (err) {
      console.log(`⛔⛔⛔ LOGIN: ${err.message}`);
      res.status(401).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
  
  async function correctPassword(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
  }
  
  function signToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }
  







