const ModelProducts = require('../../models/ProductsModel');

const DeleteProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const productos = await ModelProducts.deleteProduct(id);
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los productos'}); 
  }
}


module.exports = {
  DeleteProduct
}