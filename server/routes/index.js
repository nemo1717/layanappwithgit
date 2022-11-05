
const express = require('express')
const router = express.Router()
const{addProduct,
    getProduct,
    queryProducts,
    deleteProduct
} = require('../controllers/productController')

const {signUpBusiness} = require('../controllers/signupController')

// signup
router.post('/signup_business', signUpBusiness)

// add product
router.post('/add_product', addProduct)

// get product
router.get('get_product', getProduct)

// query product
router.get('/query_product/:id', queryProducts)

// delete product (inactive)
router.patch('/delete_product/:id', deleteProduct)


router.get("/api", (req, res, next) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})

module.exports = router