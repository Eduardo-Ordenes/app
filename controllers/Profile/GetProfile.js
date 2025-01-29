const perfilModel = require('../../models/ProfileModel');

const getPerfiles = async (req, res) => {
  try {
    const perfiles = await perfilModel.getAllPerfiles();
    res.status(200).json(perfiles);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los perfiles'}); 
  }
}


module.exports = {
  getPerfiles
}