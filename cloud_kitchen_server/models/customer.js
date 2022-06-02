 
const mongoose = require('mongoose');
const addressSchema = require('../Schemas');
const {Schema} = mongoose;

const CustomerSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  contactNo: { type: String,  required: true},
  address: addressSchema,
  deliveryAddress: addressSchema,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
},{timestamps: true});

const CustomerModel = mongoose.model('Customer',CustomerSchema);

module.exports = CustomerModel;