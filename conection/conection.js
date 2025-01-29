
const mysql = require('mysql');

const conection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto_personal',
  }
)

conection.connect((err) => {
  if(err){
    throw err;
  }

  console.log('Conexión exitosa');

})

module.exports.conection = conection;