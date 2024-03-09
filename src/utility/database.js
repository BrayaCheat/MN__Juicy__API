const mongoose = require('mongoose')
const baseURL = 'mongodb+srv://braya_cheat:0965984619@mnjuicy.yvoykjn.mongodb.net/Product?retryWrites=true&w=majority&appName=MNJuicy'
mongoose.connect(baseURL)
.then(() => {
    console.log('Connecting to MongoDB!')
})
.catch((error) => {
    console.log(error.message)
})
