const productsModel = require('../../models/ProductsModel');

const getProducts = async (req, res) => {
    try {
        const products = await productsModel.getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener registros: ' + err });
    }
}

module.exports = {
    getProducts
}