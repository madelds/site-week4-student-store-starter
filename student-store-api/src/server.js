require("dotenv").config()
const express = require("express");
const PORT = 3000;
const app = express();
const cors = require("cors");
app.use(express.json())
app.use(cors())

const productRoutes = require("../routes/productRoutes");
const orderRoutes = require("../routes/orderRoutes");
const orderItemRoutes = require("../routes/orderItemRoutes");

app.get('/', (req, res) => res.send('Hello World!'))

app.use("/products", productRoutes);

app.use("/orders", orderRoutes);

app.use("/orderItems", orderItemRoutes);

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`);
  });