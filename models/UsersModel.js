const { conection } = require('../conection/conection');

// Obtener todos los usuarios con el nombre del perfil
const getAllUsuarios = () => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT usuarios.*, perfiles.nombre_perfil
      FROM usuarios
      JOIN perfiles ON usuarios.perfil_id = perfiles.id_perfil
    `;
    conection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// Registrar un nuevo usuario
const postUsers = (userData) => {
  return new Promise((resolve, reject) => {
    const { email, usuario, contrasenia, estado, perfil_id, cargo } = userData;

    const sql = `
      INSERT INTO usuarios (email, usuario, contrasenia, estado, perfil_id, cargo) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    conection.query(sql, [email, usuario, contrasenia, estado, perfil_id, cargo], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// Actualizar usuario existente
const updateUser = (userId, userData) => {
  return new Promise((resolve, reject) => {
    const { email, usuario, contrasenia, estado, perfil_id, cargo } = userData.data;

    const sql = `
      UPDATE usuarios
      SET email = ?, usuario = ?, contrasenia = ?, estado = ?, perfil_id = ?, cargo = ?
      WHERE id = ?
    `;

    conection.query(sql, [email, usuario, contrasenia, estado, perfil_id, cargo, userId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM usuarios WHERE id = ?`;
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
  getAllUsuarios,
  postUsers,
  updateUser,
  deleteUser
};
