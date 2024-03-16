const Product__Controller = require('../Controller/Product__Controller')
const express = require('express')
const router = express.Router()
const upload = require('../utility/multer')

router.post('/product', upload.single('image'), Product__Controller.createProduct)
router.get('/product', Product__Controller.getProduct)
router.get('/product/:id', Product__Controller.getProductById)
router.put('/product/:id', upload.single('image'), Product__Controller.updateProduct)
router.delete('/product/:id', Product__Controller.deleteProduct)
router.get('/category/:category', Product__Controller.getProductByCategory)
router.get('/search', Product__Controller.searchProduct)
router.get('/paginate', Product__Controller.paginateProduct)
router.get('/limit', Product__Controller.limitProduct)
router.get('/sort', Product__Controller.sortProduct)
// router.get('/deleteAll', Product__Controller.deleteAll)

module.exports = router