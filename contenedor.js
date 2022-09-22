let products = require('./routes/products')

class Contenedor {
    create = (products) => {
        let id 
        if (products.length === 0) id=1
        else id= products[products.length-1].id+1
        product.price = parseInt(product.price)
        product = {
            id,
            ...product
        }
        products.push(product)
        return products
    }

    findAll = () => {
        return product
    }
}
module.exports = Contenedor