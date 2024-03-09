const Product__Controller = require('../Controller/Product__Controller')
const express = require('express')
const router = express.Router()
const upload = require('../utility/multer')

router.post('/product', upload.single('image'), Product__Controller.createProduct)
router.get('/product', Product__Controller.getProduct)
router.get('/product/:id', Product__Controller.getProductById)
router.get('/product/category/:category', Product__Controller.getProductByCategory)
router.put('/product/:id', upload.single('image'), Product__Controller.updateProduct)
router.delete('/product/:id', Product__Controller.deleteProduct)
router.get('/search', Product__Controller.searchProduct)
router.get('/paginate', Product__Controller.paginateProduct)

module.exports = router