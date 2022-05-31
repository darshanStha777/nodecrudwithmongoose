const express = require("express")
const route = express.Router()
const mainCOntroller = require("../controller/maincontroller")

route.get('/', mainCOntroller.indexpage)
route.post('/', mainCOntroller.getform)
route.get('/delete/:id', mainCOntroller.getDeleted)

route.get('/edit/:id', mainCOntroller.getedited)
route.post('/update/:id', mainCOntroller.update)

module.exports = route