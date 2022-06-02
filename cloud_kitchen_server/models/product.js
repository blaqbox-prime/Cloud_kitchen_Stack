
const mongoose = require('mongoose');

const {Schema} = mongoose;

const productSchema = new Schema({
    title: {type: String, required:true},
    description: {type: String, required:true},
    product_img: {type: String, required:false},
    nutrition_value: {type: Map, of: String},
    product_type: {type: String, required:true, enum: ['meal','drink','snack','dessert']},
    variants: [{title: String, additional_cost: Number}],
    prepTimeInMinutes: {type: Number, required:true, default: 5},
    associated_menus: [{title: String, description: String}],
    price: {type: Number, required:true},
},{timestamps: true})

const ProductModel = mongoose.model('Product', productSchema);

module.exports = {
    ProductModel: ProductModel,
    productSchema: productSchema,
};