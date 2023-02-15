
const express = require('express')
const router = express.Router()
const passport = require('passport');
const{addProduct,
    getProduct,
    queryProducts,
    deleteProduct
} = require('../controllers/productController')

const {signUpBusiness} = require('../controllers/Authentications/signupController')
const {mainLogin} = require('../controllers/Authentications/mainLogin')

// Main Business Signup
router.post('/signup_business', signUpBusiness)

// Main Business Login
router.post('/main_login', mainLogin)

// add product
router.post('/add_product', addProduct)

// get product
router.get('get_product', getProduct)

// query product
router.get('/query_product/:id', queryProducts)

// delete product (inactive)
router.patch('/delete_product/:id', deleteProduct)

// query pay latest Thanks
router.get('/query_pay/:id', queryProducts)


router.get("/api", (req, res, next) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})

module.exports = router