const { Client } = require('pg');




   const cliente = new Client({
    host:'localhost',
    port: 5432, // se pone el port de que se conecta postgess 
    user:'postgres',
    password:'1018483371kr',
    database:'crypto'
});

 // para conectarse  


module.exports = cliente; //libreria paa exportar 