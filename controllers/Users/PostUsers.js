const registerUserModel = require('../../models/UsersModel');

const postUsuarios = async (req, res) => {
  const data = req.body;  

  try {
    const usuarios = await registerUserModel.postUsers(data);
    res.status(200).json({ message: 'Usuario registrado exitosamente', usuarios });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar el usuario', error: err.message });
  }
};

module.exports = {
  postUsuarios
};
