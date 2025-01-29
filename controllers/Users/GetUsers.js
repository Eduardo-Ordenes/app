const perfilUsuarios = require('../../models/UsersModel');

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await perfilUsuarios.getAllUsuarios();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los usuarios'}); 
  }
}


module.exports = {
  getUsuarios
}