import express from "express";

const app = express();
const port = 9000;
app.use("/", (req, res) => {
  res.send( "<h1>Hello From Node js App</h1>");
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});