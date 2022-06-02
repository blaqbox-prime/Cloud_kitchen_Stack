const router = require('express').Router();
const Joi = require('joi');
const SellerModel = require('../models/seller');

// Auth Validation schemas -------------------------------------------------------------

    // Seller Sign Up Schema
    const sellerSignUpSchema = Joi.object({
    title: Joi.string().min(3).required(),
    owner: Joi.required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    about: Joi.string().required(),
    address: Joi.required(),
}) 

    // Seller Sign In Schema
    const sellerSignInSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
}) 

// Insert a seller (Sign Up)
router.post('/create-seller', async (req, res) => {
    // run validation
    const validation = sellerSignUpSchema.validate(req.body);
    if(validation.error){return res.status(400).json({"error": {"message" : validation.error.details[0].message}})}
    
    // if validation passes. Create Seller Account
    const {title, email,owner, about, address, password} = req.body;
    try {
        const exists = await SellerModel.findOne({email: email});
        const seller = await SellerModel(req.body);
        let doc = await seller.save();
        res.json(doc);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
})

// Find a seller (Sign In)
router.post('/signin-seller', async (req, res) => {
    // run validation
    const validation = sellerSignInSchema.validate(req.body);
    if(validation.error){return res.status(400).json({"error": {"message" : validation.error.details[0].message}})}
    
    // if validation passes. Find Seller Account
    const {email, password} = req.body;
    const user = await SellerModel.findOne({email: email});
    // return if account is not found
    if(!user) return res.status(400).json({"error": {"message": "Account does not exist"}});

    // return if password is incorrect
    if(user.password !== password) return res.status(400).json({"error": {"message": "password is incorrect"}});
    // return the Seller 
    res.json(user);
})


// export router
module.exports = router;