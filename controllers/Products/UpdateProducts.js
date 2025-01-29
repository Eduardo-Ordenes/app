const ProductsModel = require('../../models/ProductsModel');

const UpdateProducts = async (req, res) => {
  const data = req.body;
  const id = data.id;
  try {
    const productos = await ProductsModel.updateProducts(id,data);
    res.status(200).json({ message: 'Usuario actualizado exitosamente', productos });
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizado el usuario', error: err.message });
  }
};

module.exports = {
  UpdateProducts
};
