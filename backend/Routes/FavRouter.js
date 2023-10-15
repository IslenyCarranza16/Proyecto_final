const express = require('express') // llamar express
const cliente = require('../libraries/postgress')
const router = express.Router();
//const calificacionServices = require('./../services/calificacion.services');

//const validatorHandler = require('./../middlewares/validator.handler'); 
//const {createContractSchema, updateContractschema, getContractSchema} = require('./../schemas/contrato.schema');

// 


exports.fav = async (req, res) => {
    try {
      const {id} = req.body;
            
        cliente.query(`SELECT id, id_usuario, moneda FROM public.favoritos WHERE id_usuario=${id};`, (err, result)=>{
console.log(result.rows)  
const user = result.rows
res.status(200).json({user}) 
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
  cliente.connect(); 



/*
router.get('/', (req,res)=>{

    cliente.query('SELECT id, id_usuario, moneda FROM public.favoritos;', (err, result)=>{
       if(!err){
          console.log(result)
           res.send(result.rows);
       }
    });
    cliente.end;
    
    })


    // obtener por id
    router.get('/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        console.log(id)
        cliente.query(`SELECT id, id_usuario, moneda FROM public.favoritos WHERE id=${id};`, (err, result)=>{
           if(!err){
               res.send(result.rows);
           } 
       });
       cliente.end;
     
     })

     //post
     router.post('/',(req, res)=> {
        const user = req.body;
        console.log(user)
        
        cliente.query(`INSERT INTO public.favoritos(id, id_usuario, moneda) 
        VALUES (DEFAULT, ${user.id_usuario}, '${user.moneda}');`, (err, result)=>{
            if(!err){
                res.status(201).send('Insertion was successful')
            }
            else{ console.log(err.message) }
        })
        cliente.end; 
     })
     
     router.put('/:id', (req, res)=> {
        let user = req.body;
        let id = parseInt(req.params.id)
        console.log(id)
        console.log(user)
        let updateQuery = `UPDATE public.favoritos SET id_usuario=${user.id_usuario}, moneda='${user.moneda}' WHERE id=${id};`
     
        cliente.query(updateQuery, (err, result)=>{
            if(!err){
                res.send('Update was successful')
            }
            else{ console.log(err.message) }
        })
        cliente.end;
     })
     
     
     //eliminar
     
     // el de buscar  los favoritos 




     router.delete('/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        console.log(`para borrar el id ${id}`)
        let insertQuery = `DELETE FROM public.favoritos WHERE id=${id};`
     
        cliente.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ console.log(err.message) }
        })
        cliente.end;
     })

    */