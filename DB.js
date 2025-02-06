const mongoose = require('mongoose')
    mongoose.connect("mongodb+srv://chrisviveks70:1234@db1.ykkgs.mongodb.net/")
    .then(()=>{
        console.log("Connected to DataBase")
    })
    .catch((err)=>{console.log(`Error:${err}`)})