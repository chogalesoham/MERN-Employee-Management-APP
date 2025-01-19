const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
require("./models/db.js");

const EmployeeRouter = require("./routes/employee-routes.js");

const app = express();

app.get("/", (req, res) => {
  res.send("API Testion");
});

app.use("/api/employee", EmployeeRouter);

app.listen(PORT, () => {
  console.log(`Server Start at Port: ${PORT}`);
});
