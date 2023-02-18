const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Some response");
});

app.post("/", (req, res) => {
  // data
  console.log(req.body);

  // return id
  res.send("Insertion completed");
});

app.put("/", (req, res) => {
  // ID and data
  console.log(req.body);
  res.send("Updation completed");
});

app.delete("/", (req, res) => {
  // Id to delete
  console.log(req.params.id);
  res.send("Deletion completed");
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("Server connected");
});
