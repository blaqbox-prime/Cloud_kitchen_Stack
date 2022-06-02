
const mongoose = require('mongoose');
const { productSchema } = require('./product');
const {Schema} = mongoose;

const orderItemSchema = new Schema({
  order_id: Schema.Types.ObjectId,
  product: productSchema,
  quantity: {type: Number, min: 1},
  total: Number,
})

const OrderItemModel = mongoose.model('OrderItem', orderItemSchema);

module.exports = {OrderItemModel, orderItemSchema};