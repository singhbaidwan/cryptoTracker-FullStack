const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
app.use("/api", routes);
