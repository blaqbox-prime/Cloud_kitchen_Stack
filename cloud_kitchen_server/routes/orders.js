const router = require('express').Router();
const OrderModel = require('../models/order');

// Create a new Order

router.post('/create', async (req,res) => {

    try {
        const newOrder = await OrderModel.create({...req.body});
        res.json({inserted: newOrder})
    } catch (error) {
        res.status(500).json({error: error});
    }
})


// Export 
module.exports = router;