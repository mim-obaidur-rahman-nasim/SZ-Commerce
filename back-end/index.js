const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//Database connect
mongoose.connect(
  "mongodb+srv://shreezon:Shreezon%40123%23@cluster0.6xabu.mongodb.net/EasyMart-bd"
);

//API creation
app.get("/", (req, res) => {
  res.send("Express app is running");
});

//Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating Upload Endpoint for images
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//Schema for Creating Product

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
  description: {
    // Add this field to store product description
    type: String,
    required: true, // You can also set it as optional depending on your needs
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find();
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    description: req.body.description,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//Creating API for delete product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//All products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All products fetched");
  res.send(products);
});

//Schema creating for user model
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Creating endpoint for registering the user
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "Existing user found on same email address",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port" + port);
  } else {
    console.log("Error : " + error);
  }
});

//Creating endpoint for user login

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, error: "Wrong password" });
    }
  } else {
    res.json({ success: false, error: "Wrong email id" });
  }
});

//Creating endpoint for new collection
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("New collection fetched");
  res.json(newcollection);
});

//Creating endpoint for popular in women
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popular_in_women = products.slice(0, 4);
  console.log("Popular in women fetched");
  res.json(popular_in_women);
});

//Creating middleware to fetch user
const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).json({ error: "Invalid token" });
    }
  }
};

//Creating endpoint for adding product in cartdata

app.post("/addtocart", fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  ); 
  res.send("Added");
});
// app.post("/addtocart", fetchUser, async (req, res) => {
//   console.log("Added", req.body.itemId, req.body.size);
//   let userData = await Users.findOne({ _id: req.user.id });
//   let itemIndex = userData.cartData.findIndex(
//     (item) => item.itemId === req.body.itemId && item.size === req.body.size
//   );

//   userData.cartData[itemIndex].quantity += 1;

//   await Users.findOneAndUpdate(
//     { _id: req.user.id },
//     { cartData: userData.cartData }
//   );
//   res.send("Added");
// });


// app.post("/addtocart", fetchUser, async (req, res) => {
//   console.log("Added", req.body.itemId, req.body.size);

//   let userData = await Users.findOne({ _id: req.user.id });
//   let itemIndex = userData.cartData.findIndex(
//     item => item.itemId === req.body.itemId && item.size === req.body.size
//   );

//   if (itemIndex > -1) {
//     // If item with the selected size exists, increment quantity
//     userData.cartData[itemIndex].quantity += 1;
//   } else {
//     // If item with the selected size does not exist, add it to the cart
//     userData.cartData.push({
//       itemId: req.body.itemId,
//       size: req.body.size,
//       quantity: 1,
//     });
//   }

//   await Users.findOneAndUpdate(
//     { _id: req.user.id },
//     { cartData: userData.cartData }
//   );

//   res.send("Added");
// });

//Creating endpoint for removing product in cartdata
app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("Removed", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed");
});

//Creating a endpoint to get cartdata
app.post("/getcart", fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});

// Endpoint to fetch a product by ID
app.get("/product/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findOne({ id: Number(productId) });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Review model
const Review = mongoose.model("Review", {
  productId: {
    type: Number,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5, // Assuming rating is on a scale of 1 to 5
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Fetch reviews for a product
app.get("/reviews/:productId", async (req, res) => {
  const { productId } = req.params;
  try {
    const reviews = await Review.find({ productId: Number(productId) });
    res.json({ reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching reviews" });
  }
});

// Submit review
app.post("/addreview", fetchUser, async (req, res) => {
  const { productId, reviewText, rating } = req.body;

  if (!productId || !reviewText || !rating) {
    return res
      .status(400)
      .json({ error: "Product ID, review text, and rating are required" });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: "Rating must be between 1 and 5" });
  }

  const newReview = new Review({
    productId,
    reviewText,
    rating,
  });

  try {
    await newReview.save();
    res.json({ success: true, message: "Review added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding review" });
  }
});
