// express
const express = require("express");
const app = express();

// mongoose
require("./data/dbConnection");

app.use(express.json());

// path
const productRoutes = require("./routes/product");

// routes
app.get("/", (req, res) => {
  res.send({ success: true });
});

app.use("/product", productRoutes);

// listen
app.listen(process.env.PORT || 8000, () => {
  console.log("App is connected");
});
