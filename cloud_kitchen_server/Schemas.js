const mongoose = require('mongoose');
const {Schema} = mongoose;

const addressSchema = new Schema({
    street: String,
    suburb: String,
    city: String,
    province: String,
    postal_code: String,
});

module.exports = addressSchema;