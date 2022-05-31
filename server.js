const express = require("express")
const mongoose = require("mongoose")
const mainRouter = require("./route/mainrouter")

const app = express()

app.set("view engine", "ejs")
app.set("views", "view")

mongoose.connect("mongodb://localhost/mylearn", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(a => {
    console.log("database connect")
}).catch(err => {
    console.log("databae not connect")
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(mainRouter)

app.listen(5000, () => {
    console.log("server Running")
})