const express = require('express');
const prodcuctRouter = require('./routes/products')
const app = express();

const server = app.listen(8080, () => console.log("server Running!!")); 
server.on("error", (error) => console.log(`Error en el servidor`));

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('views', './views')
app.set('view engine','ejs')
app.get ('/', (req,res) =>{
    res.render('create-product')})
app.use('/products', prodcuctRouter)

