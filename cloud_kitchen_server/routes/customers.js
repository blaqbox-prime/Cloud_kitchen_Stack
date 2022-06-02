const CustomerModel = require("../models/customer");

const router = require("express").Router();

// create Customer
router.post("/create", async (req,res) => {
    try{

        const customer = await CustomerModel.create(req.body);
        res.json(customer);
        

    }catch(error){
        console.log(error)
        res.json({error});
    }
});

// Get All Customers.

// Get All Customers for given seller



module.exports = router;