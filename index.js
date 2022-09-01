const Contenedor = require('./contenedor.js')
const contenedor = new Contenedor()

let producto = {
    title: "Auricular",
    price: 20000,
    stock: 5,
    thumbnail:"jbl tune 600bt"
} 

contenedor.save(producto) .then(result => console.log(result)) 
// manager.findAll() .then(result => console.log(result)) 