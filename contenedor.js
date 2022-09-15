let products = require('./routes/products')

class Contenedor {
    create = (products) => {
        let id = products[products.length-1].id+1
        product = {
            id,
            ...products
        }
        products.push(products)
        return products
    }

    findAll = () => {
        return products
    }

    findById = (id) => {
        id = parseInt (id)
        return products.find(item => item.id === id)
    }

    update = (id, products) => {
        id = parseInt(id)
        let newProducts = products.map(item => {
            if (item.id === id) {
                return {
                    id,
                    ...products
                } 
            } else return item
        })
        products = newProducts
        return this.findById(id)
    }

    delete = (id) => {
        id = parseInt (id)
        let newProducts = products.filter(item => item.id !== id)
        products=newProducts
        return products
    }
}
module.exports = Contenedor