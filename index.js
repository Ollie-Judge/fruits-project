//const express = require("express");
const mongoose = require("mongoose");

//app = express();

mongoose.connect("mongodb://localhost:27017/fruitDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "no name specified, check your entry and try again"],
  },
  rating: { type: Number, min: 0, max: 10 },
  review: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("person", personSchema);

/*const fruit = new Fruit({
  name: "apple",
  rating: 7,
  review: "pretty solid as a fruit",
});

const person = new Person({
  name: "john",
  age: 53,
});

fruit.save();
person.save();
*/
let mango = new Fruit({
  name: "mango",
  rating: 5,
  review: "average",
});
mango.save();

/*const person = new Person({
  name: "Amy",
  age: 25,
  favouriteFruit: pineapple,
});
person.save();*/

Person.updateOne({ name: "john" }, { favouriteFruit: mango })
  .then((item) => console.log(item))
  .catch((err) => console.log("ERROR :", err));

/*const kiwi = new Fruit({
  name: "kiwi",
  rating: 6,
  review: "Very nice",
});

const orange = new Fruit({
  name: "Orange",
  rating: 9,
  review: "not bad for a colour",
});

const bananna = new Fruit({
  name: "Bananna",
  rating: 5,
  review: "pretty decent",
});

const pear = new Fruit({
  name: "Pear",
  rating: 10,
  review: "sweet",
});

const help = new Fruit({
  rating: 10,
  review: "sweet",
});*/

/*Fruit.insertMany().then([kiwi, orange, bananna, pear, help], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(fruit);
  }
});*/
/*
Fruit.find(fruit)
  .then((item) => console.log(item))
  .catch((err) => console.log("ERROR :", err));

Fruit.findByIdAndUpdate({ _id: "652823c4e4fd5f118eb35008" }, { name: "Peach" })
  .then((item) => console.log(item))
  .catch((err) => console.log("ERROR :", err));

Fruit.findByIdAndDelete("6529617fca2cd91ba50c052b")
  .then(console.log("Item deleted"))
  .catch((err) => console.log("ERROR :", err));
*/
