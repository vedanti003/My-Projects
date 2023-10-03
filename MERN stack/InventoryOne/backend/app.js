// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Purchase, Sales, User } = require("./models/product");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "husrigbvirs56464728bg%$#gfya526235brhwi";
   
const db = require("./db");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    // Check if the user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User object with hashed password
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Respond with the newly created user object
    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Error adding User", err);
    res.status(500).json({ error: "Failed to add User" });
  }
});           

// Read (Get all users)
app.get("/users", (req, res) => {
  User.find({})
    .then((user) => res.status(200).json(user))
    .catch((err) =>
      res.status(500).json({ error: "Failed to retrieve users" })
    );
});

// Update (Modify an existing product)
app.put("/user/:id", (req, res) => {
  const { username, email, password } = req.body;

  User.findByIdAndUpdate(
    req.params.id,
    { username, email, password },
    { new: true }
  )
    .then((updatedProduct) => res.status(200).json(updatedProduct))
    .catch((err) =>
      res.status(500).json({ error: "Failed to update product." })
    );
});
 
// Delete (Remove user)
app.delete("/user/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((removeUser) => res.status(200).json(removeUser))
    .catch((err) =>
      res.status(500).json({ error: "Failed to delete product." })
    );
});

// Login User
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User not found" });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);

    return res.json({ status: "ok", data: token });
  } else {
    return res.json({ status: "error", error: "Invalid Password" });
  }
});

//after login check
app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;
    User.findOne({ email: useremail }).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.send({ status: "error", data: error });  
  }
});

// Create (Add a new product)
app.post("/sales", (req, res) => {
  const { name, price, description, gst } = req.body;

  if (!name || !price || !gst) {
    return res
      .status(400)
      .json({ error: "Name, price, and GST are required fields" });
  }

  const newSales = new Sales({
    name,
    price,
    description,
    gst,
  });

  newSales
    .save()
    .then((product) => res.status(201).json(product))
    .catch((err) => {
      console.error("Error adding product:", err);
      res.status(500).json({ error: "Failed to add product." });
    });
});

// Read (Get all products)
app.get("/sales", (req, res) => {
  console.log("GET request to /products received");
  Sales.find({})
    .then((products) => res.status(200).json(products))
    .catch((err) =>
      res.status(500).json({ error: "Failed to retrieve products." })
    );
});

// Update (Modify an existing product)
app.put("/sales/:id", (req, res) => {
  const { name, price, description, gst } = req.body;

  Sales.findByIdAndUpdate(
    req.params.id,
    { name, price, description, gst },
    { new: true }
  )
    .then((updatedProduct) => res.status(200).json(updatedProduct))
    .catch((err) =>
      res.status(500).json({ error: "Failed to update product." })
    );
});

// Delete (Remove a product)
app.delete("/sales/:id", (req, res) => {
  Sales.findByIdAndRemove(req.params.id)
    .then((removedProduct) => res.status(200).json(removedProduct))
    .catch((err) =>
      res.status(500).json({ error: "Failed to delete product." })
    );
});

// Create (Add a new product)
app.post("/purchase", (req, res) => {
  const { name, price, description, gst } = req.body;

  if (!name || !price || !gst) {
    return res
      .status(400)
      .json({ error: "Name, price, and GST are required fields" });
  }

  const newPurchase = new Purchase({
    name,
    price,
    description,
    gst,
  });

  newPurchase
    .save()
    .then((product) => res.status(201).json(product))
    .catch((err) => {
      console.error("Error adding product:", err);
      res.status(500).json({ error: "Failed to add product." });
    });
});  

// Read (Get all products)
app.get("/purchase", (req, res) => {
  console.log("GET request to /products received");
  Purchase.find({})
    .then((products) => res.status(200).json(products))
    .catch((err) =>
      res.status(500).json({ error: "Failed to retrieve products." })
    );
});

// Update (Modify an existing product)
app.put("/purchase/:id", (req, res) => {
  const { name, price, description, gst } = req.body;

  Purchase.findByIdAndUpdate(
    req.params.id,
    { name, price, description, gst },
    { new: true }
  )
    .then((updatedProduct) => res.status(200).json(updatedProduct))
    .catch((err) =>
      res.status(500).json({ error: "Failed to update product." })
    );
});

// Delete (Remove a product)
app.delete("/purchase/:id", (req, res) => {
  Purchase.findByIdAndRemove(req.params.id)
    .then((removedProduct) => res.status(200).json(removedProduct))
    .catch((err) =>
      res.status(500).json({ error: "Failed to delete product." })
    );
});

// Start the database connection and then start the server
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

