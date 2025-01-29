const perfilUsuarios = require('../../models/UsersModel');

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const usuarios = await perfilUsuarios.deleteUser(id);
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los usuarios'}); 
  }
}


module.exports = {
  deleteUser
}