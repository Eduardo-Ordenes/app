const { conection } = require('../conection/conection');

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM productos'
    conection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })
}


// Registrar un nuevo producto
const postProducts = (userData) => {
  return new Promise((resolve, reject) => {
    const { nombre, stock, cantidad_minima, unidad_medida, precio, categoria, descripcion } = userData;
    console.log(cantidad_minima , stock)

    const sql = `
      INSERT INTO productos (nombre, stock, cantidad_minima, unidad_medida, precio, categoria, descripcion) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    conection.query(sql, [nombre, stock, cantidad_minima, unidad_medida, precio, categoria, descripcion], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};



// Actualizar producto existente
const updateProducts = (userId, userData) => {
  return new Promise((resolve, reject) => {
    const { nombre, stock, cantidad_minima, unidad_medida, precio, categoria, descripcion } = userData.data;

    const sql = `
      UPDATE productos
      SET nombre = ?, stock = ?, cantidad_minima = ?, unidad_medida = ?, precio = ?, categoria = ?, descripcion = ?
      WHERE id = ?
    `;

    conection.query(sql, [nombre, stock, cantidad_minima, unidad_medida, precio, categoria, descripcion, userId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


const deleteProduct = (userId) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM productos WHERE id = ?`;

    conection.query(sql, [userId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


module.exports = {
  getAllProducts,
  postProducts,
  updateProducts,
  deleteProduct
}