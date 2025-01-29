const productsModel = require('../../models/ProductsModel');

const postProducts = async (req, res) => {
  const data = req.body;  
  console.log('N: ' + data.nombre);

  try {
    const usuarios = await productsModel.postProducts(data);
    res.status(200).json({ message: 'Producto registrado exitosamente', usuarios });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar el producto', error: err.message });
  }
};

module.exports = {
  postProducts
};
