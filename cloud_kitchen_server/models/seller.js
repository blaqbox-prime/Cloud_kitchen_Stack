
const mongoose = require('mongoose');
const {Schema} = mongoose;
 const addressSchema = require('../Schemas');

const ownerSchema = new Schema({
  firstName: {type: String, required: false},
  lastName: {type: String, required: false},
  about: {type: String, required: true},
  picture: {type: String, required: false},
  address: addressSchema,
},{timestamps: true});

const sellerSchema = new Schema({
  title: {type: String, required: true},
  owner: ownerSchema,
  address: addressSchema,
  about: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  customers: [Schema.Types.ObjectId],
  orders: [Schema.Types.ObjectId],
  menus: [Schema.Types.ObjectId],
  logo: {type: String, required: false}
},{timestamps: true});

const SellerModel = mongoose.model('Seller', sellerSchema);


module.exports = SellerModel;
