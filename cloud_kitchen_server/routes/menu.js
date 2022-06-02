// const router = require('express').Router();
// const {Menu} = require('../models');

// // Create a new product

// router.post('/create', async (req,res) => {
//     const {title, description, seller_id } = req.body;

//     try {
//         const newMenu = await Menu.create({title, description, seller_id });
//         res.json({inserted: newMenu})
//     } catch (error) {
//         res.status(500).json({error: error?.messsage});
//     }
// })

// // Get a menu via id
// router.get('/:id', async (req, res) => {
//     try{
//         const menu = await Menu.findOne({where: {menu_id: parseInt(req.params.id)}});
//         res.json({menu});
//     }catch(err){
//         console.error(err);
//         res.status(500).json({error: err?.messsage});
//     }
// });

// // Get all menus of a seller
// router.get('/sellers/:seller_id', async (req, res) =>{
//     try{
//         const sellerMenusList = await Menu.findAll({where: {seller_id: req.params.seller_id}});
//         res.json({data: sellerMenusList});
//     }catch(error){
//         console.log(error);
//         res.json({error: error.message})
//     }
// });

// // update a menu
// // router.put('/update/:id', async (req, res) => {
// //     const {seller_id, title, description,} = req.body;
// //     try{
// //         const UpdatedMenu = await Menu.patch
// //     }
// //     catch(error){
// //         res.json({error: error.message})
// //     }
// // })


// // Export 
// module.exports = router;