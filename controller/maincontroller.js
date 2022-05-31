const bibhav = require("../model/form")

exports.indexpage = (req, res, next) => {
    bibhav.find({})
        .then(alldata => {
            res.render("index.ejs", {
                alldata
            })
        })
}

exports.getform = (req, res, next) => {
    console.log(req.body)
    bibhav.create({
        ...req.body
    }).then(a => {
        console.log("databse Crete")
    }).catch(err => {
        console.log("database not create")
    })
}

exports.getDeleted = (req, res, next) => {
    bibhav.findByIdAndDelete(req.params.id)
        .then(resultdelete => {
            console.log("delete successfullt");
            res.redirect('/')
        }).catch(err => {
            console.log(err)
        })
}
exports.getedited = (req, res, next) => {
    bibhav.findById(req.params.id)
        .then(data => {
            res.render("edit.ejs", {
                data
            })
        }).catch(err => {
            console.log(err)
        })
}
exports.update = (req, res, next) => {
    bibhav.findByIdAndUpdate(req.params.id, {...req.body }, { new: true })
        .then(e => {
            res.redirect('/')
        }).catch(err => {
            console.log(err)
        })

}