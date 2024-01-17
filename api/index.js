const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Test api working.",
  });
});

const productRoute = require("./Routes/ProductRoute");
app.use("/api/products", productRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
