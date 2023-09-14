const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const Person = require("./model/model");

const app = express();
app.use(express.json());
port = 3500;

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("error connecting to mongodb", err);
  });
app.get("/", (req, res) => {
  res.json({ message: "endpoint is working" });
});

app.post("/api", async (req, res) => {
  if (typeof req.body.name !== "string") {
    return res.status(400).send({ error: "Name must be a string" });
  }
  const person = new Person({
    name: req.body.name,
  });
  await person.save();
  res.status(201).send(person);
});

app.get("/api/:user_id", async (req, res) => {
  const person = await Person.findById(req.params.user_id);
  if (!person) return res.status(404).send({ error: "Person not found" });
  res.send(person);
});

app.put("/api/:user_id", async (req, res) => {
  const person = await Person.findByIdAndUpdate(
    req.params.user_id,
    { name: req.body.name },
    { new: true }
  );
  if (!person) return res.status(404).send({ error: "Person not found" });
  res.send(person);
});

app.delete("/api/:user_id", async (req, res) => {
  const person = await Person.findByIdAndRemove(req.params.user_id);
  if (!person) return res.status(404).send({ error: "Person not found" });
  res.send({ message: "Deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
