const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/products');
const customersRoute = require('./routes/customers');
const ordersRoute = require('./routes/orders');
// const menuRoute = require('./routes/menu');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoute);
app.use('/products', productsRoute);
app.use('/customers',customersRoute);
app.use('/orders',ordersRoute);
// app.use('/menus', menuRoute);

app.get('/', (req,res)=>{
    res.send("<h1>Cloud Kitchen Server 2.0</h1>")
})

app.listen(3300, async () => {
    console.log('server running on http://localhost:3300');
     // check db connection
     mongoose.connect('mongodb+srv://root:GYmd1jGeA2EX0jVw@mongo-db.n9vxw.mongodb.net/cloud_kitchen?retryWrites=true&w=majority',(err)=>{
         if(err){return console.log(err.message);}
         console.log("Mongodb connected successfully");
     })
})