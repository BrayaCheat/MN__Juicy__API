const mongoose = require('mongoose')
const Grid = require('gridfs-stream')
const baseURL = 'mongodb+srv://braya_cheat:0965984619@mnjuicy.yvoykjn.mongodb.net/Product?retryWrites=true&w=majority&appName=MNJuicy'
mongoose.connect(baseURL)
.then(() => {
    console.log('Connecting to MongoDB!')
})
.catch((error) => {
    console.log(error.message)
})
let gfs;
mongoose.connection.once('open', () => {
    gfs = Grid(mongoose.connection.db, mongoose.mongo)
    gfs.collection('uploads')
})
