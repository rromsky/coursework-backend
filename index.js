const express = require("express");
const setInfo = require("./routes/setInfo");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/setInfo", setInfo);
app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
