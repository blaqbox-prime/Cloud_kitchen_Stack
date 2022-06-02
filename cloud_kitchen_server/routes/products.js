const router = require("express").Router();
const { Product, ProductModel } = require("../models/product");
const formidable = require("formidable");
const {storage} = require("../Firebase");
const { v4: uuidv4 } = require('uuid');
const Mongoose = require('mongoose');
const {
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");
const fs = require("fs");

// Create a new product ------------------------------------------------------------------------------------
router.post("/create", async (req, res) => {

  const form = formidable({multiples: true});

  form.parse(req, async (err,fields,files) => {
    if(err){
      console.log(err);
      return res.status(500).json({err});
    }
    try {
      let product = JSON.parse(fields.product);

      console.log(product);

      const uploaddir = __dirname + '/../images/';
      
      // const = files['image'];
      const file = fs.readFileSync(files['image'].filepath);
      

      let product_img;
// Upload Image to firebase
      try {
        const imageRef = ref(storage, `products/${uuidv4()}.jpg`);
        uploadBytes(imageRef, file, { contentType: "image/jpg" }).then(
          async (snapshot) => {
            getDownloadURL(ref(storage, snapshot.ref.fullPath)).then(async (url) => {
              console.log(url)
              // commit new product to Database -----------------
              const newProduct = await ProductModel.create({...product, ...{product_img: url}});
              return res.json({ inserted: newProduct });
            })
          }
        );
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Failed to upload Image" });
      }

    
    } catch (error) {
      res.status(500).json({ error: error });
    }


  })

});

// Upload Product Image ----------------------------------------------------------
router.post("/upload", async (req, res) => {
  var file = fs.readFileSync("image.jpg");
  try {
    const imageRef = ref(storage, `products/${uuidv4()}.jpg`);
    uploadBytes(imageRef, file, { contentType: "image/jpg" }).then(
      async (snapshot) => {
          let downloadPath;
        getDownloadURL(ref(storage, snapshot.ref.fullPath)).then(url => res.json({
            status: "Uploaded file",
            url: url,
          }))
      }
    );
  } catch (error) {
    res.json({ error: error });
  }


});

// Update Product ----------------------------------

router.post("/update/:id", async (req, res) => {
  try {
    const objId = new Mongoose.Types.ObjectId(req.params.id);
    const updatedProd = await ProductModel.findByIdAndUpdate(objId, req.body);
    return res.json({ updated: updatedProd });

  } catch (error) {
    console.log(error);
    return res.json({ error: error });
  }
});


// Get All Products --------------------------------
router.get("/", async (req, res) => {
  try {
    const productsList = await ProductModel.find();
    res.json({ products: productsList});
  } catch (error) {
    res.json({ error: error });
  }
});


// Delete Product ----------------------------------

router.delete("/delete/:id", async (req, res) => {
  try {
    const objId = new Mongoose.Types.ObjectId(req.params.id);
    const deletedProd = await ProductModel.findByIdAndDelete(objId);
    return res.json({ deleted: deletedProd });

  } catch (error) {
    console.log(error);
    return res.json({ error: error });
  }
});




// Export
module.exports = router;
