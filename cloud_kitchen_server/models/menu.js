
const mongoose = require('mongoose');
const {Schema} = mongoose;
const {productSchema} = require('./product');

const menuSchema = new Schema({
  title: {type: 'string', required: true},
  description: {type: 'string', required: true},
  seller_id: {type: Schema.Types.ObjectId, required: true},
  products: [productSchema]
});

const MenuModel = mongoose.model('Menu',menuSchema);

module.exports = MenuModel;