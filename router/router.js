
const express = require('express');
const { conection } = require('../conection/conection');
const controllerLogin = require('../controllers/Auth/Login');
const controllerPerfil = require('../controllers/Profile/GetProfile');
const GetUsers = require('../controllers/Users/GetUsers');
const PostUsers = require('../controllers/Users/PostUsers');
const UpdateUsers = require('../controllers/Users/UpdateUsers');
const DeleteUsers = require('../controllers/Users/DeleteUsers');
const GetProducts = require('../controllers/Products/GetProducts');
const PostProducts = require('../controllers/Products/PostProducts');
const UpdateProducts = require('../controllers/Products/UpdateProducts');
const DeleteProducts = require('../controllers/Products/DeleteProducts');

const router = express.Router();
router.use(express.json());

//AUTENTIFICACION 
router.post('/login', controllerLogin.login);

//PERFILES
router.get('/perfiles', controllerPerfil.getPerfiles);

//USUARIOS
router.get('/usuarios', GetUsers.getUsuarios);
router.post('/crearUsuarios', PostUsers.postUsuarios);
router.put('/actualizarUsuarios', UpdateUsers.UpdateUsuarios);
router.delete('/eliminarUsuario', DeleteUsers.deleteUser);

//PRODUCTOS
router.get('/productos', GetProducts.getProducts);
router.post('/crearProductos', PostProducts.postProducts);
router.put('/actualizarProductos', UpdateProducts.UpdateProducts);
router.delete('/eliminarProductos', DeleteProducts.DeleteProduct);

router.post('/guardar-formulario', async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, mensaje } = req.body;

    if (!nombre || !apellido || !email || !mensaje) {
      return res.status(400).json({ mensaje: 'Todos los campos requeridos deben estar llenos.' });
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      return res.status(400).json({ mensaje: 'Nombre contiene caracteres no permitidos.' });
    }

    if (!/^[a-zA-Z\s]+$/.test(apellido)) {
      return res.status(400).json({ mensaje: 'Apellido contiene caracteres no permitidos.' });
    }

    const query = `
          INSERT INTO formulario_contacto (nombre, apellido, email, telefono, mensaje) 
          VALUES (?, ?, ?, ?, ?)
      `;

    await conection.query(query, [nombre, apellido, email, telefono || null, mensaje]);

    res.status(200).json({ mensaje: 'Datos guardados con éxito' });
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).json({ mensaje: 'Error al guardar los datos' });
  }
});



module.exports = router