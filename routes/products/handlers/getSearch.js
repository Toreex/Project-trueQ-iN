const Product = require('../../../models/Product')

function getSearch (req, res) {
  const title = req.query.title
  console.log(title)

  Product.find({ title: new RegExp(title, 'i') })
        .sort({ title: 1 })
        .exec(function (err, products) {
          if (err) return res.send('error de busqueda')

          if (products.length === 0) return res.send('no se encuentran resultados')

          res.render('results', { products })
        })
}

module.exports = getSearch
