const userBusinessSchema = require('../models/userBusinessSchema')
const mongoose = require('mongoose')

// sign up for new business
const signUpBusiness = async (req, res, next) => {
    const {businessName, email,password,address,city,state,country,phoneNumber,userRole} = req.body


    try{
        const signup = await userBusinessSchema.create({businessName, email,password,address,city,state,country,phoneNumber,userRole})
        res.send(state)
        res.status(200).json(signup)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {signUpBusiness}