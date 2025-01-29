
// const express = require('express');
// const { conection } = require('../../conection/conection');
// const bcrypt = require('bcrypt');

// exports.login = (req, res) => {

//   const { user, password } = req.body;

//   const sql = `SELECT * FROM usuarios WHERE usuario = ? AND contrasenia = ?`;

//   conection.query(sql, [user, password], (err, result, fields) => {
//     if (err) {
//       return res.status(500).json({ error: `Error interno en la db: ${err}` })
//     }

//     if (result.length > 0) {
//       return res.status(200).json({ success: true, message: 'Usuario autenticado' });
//     } else {
//       return res.status(201).json({ success: false, message: 'Usuario o contraseña incorrecta' });
//     }

//   })

// }



const express = require('express');
const { conection } = require('../../conection/conection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = 'clave_secreta_super_segura';  // Clave secreta segura

exports.login = (req, res) => {
  const { user, password } = req.body;

  const sql = `
    SELECT * 
    FROM usuarios
    WHERE usuario = ?
  `;

  conection.query(sql, [user], async (err, result) => {

    if (err) {
      return res.status(500).json({ error: `Error interno en la db: ${err}` });
    }

    if (result.length > 0) {
      
      const usuario = result[0];

      // Verifica la contraseña con bcrypt
      const passwordMatch = await bcrypt.compare(password, usuario.contrasenia);
      
      if (password == usuario.contrasenia) {
        // Generar el token con la información del usuario
        const token = jwt.sign(
          { id: usuario.id, nombre: usuario.usuario, cargo: usuario.cargo },  // Cargo desde usuarios
          SECRET_KEY,
          { expiresIn: '1h' }
        );

        // Devuelve el token y los datos del usuario
        return res.status(200).json({
          success: true,
          token,
          user: {
            id: usuario.id,
            nombre: usuario.usuario,
            cargo: usuario.cargo
          }
        });
      } else {
        return res.json({ success: false, message: 'Contraseña incorrecta' });
      }
    } else {
      return res.json({ success: false, message: 'Usuario no encontrado' });
    }
  });
};
