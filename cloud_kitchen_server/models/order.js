
// 
const mongoose = require('mongoose');
const addressSchema = require('../Schemas');
const { orderItemSchema } = require('./orderitem');
const {Schema} = mongoose;

const orderSchema = new Schema({
  customer_id: {type: Schema.Types.ObjectId, required: true},
  seller_id: {type: Schema.Types.ObjectId, required: true},
  status: {type: String, required : true, default:"new", enum: ['new','preparing','waiting for pickup', 'on delivery', 'cancelled','fulfilled']},
  isDelivery: {type: Boolean, required : true, default: false},
  deliveryAddress: addressSchema,
  paid: {type: Boolean, default: false},
  items: [orderItemSchema],
},{timestamps: true});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel; 