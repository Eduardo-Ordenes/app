
const { conection } = require('../conection/conection');

const getAllPerfiles = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM perfiles'
    conection.query(sql, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

module.exports = {
  getAllPerfiles
}