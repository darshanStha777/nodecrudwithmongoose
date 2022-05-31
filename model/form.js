const mongoose = require("mongoose")

const alish = mongoose.Schema;
const darshan = new alish({
    email: {
        type: String
    },
    password: {
        type: String
    }
})
module.exports = mongoose.model("august12", darshan)