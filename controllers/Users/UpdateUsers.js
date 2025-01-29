const UserModel = require('../../models/UsersModel');

const UpdateUsuarios = async (req, res) => {
  const data = req.body;
  const id = data.id;
  try {
    const usuarios = await UserModel.updateUser(id,data);
    res.status(200).json({ message: 'Usuario actualizado exitosamente', usuarios });
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizado el usuario', error: err.message });
  }
};

module.exports = {
  UpdateUsuarios
};
