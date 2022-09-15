const { response } = require("express")
const { route } = require("../routes/products")

let productsForm = document.getElementById('productsForm')

const handleSubmit = (evt, form, route) => {
    evt.preventDefault()
    let formData = new formData(form)
    let obj = {}
    formData.forEach((value, key) => obj[key]=value)
    fetch(route, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type":"application/json"
        }
    }).then (response => response.json())
        .then(response => console.log(response))
        form.reset()
}

productsForm.addEventListener('submit', (e) => handleSubmit(e,e.target,'/api/products'))