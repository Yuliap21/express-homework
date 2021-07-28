const express = require ('express');
const app = express();
const PORT = 3000;

app.set("view engine", "jsx");
// app.engine('jsx', require('express-react-views').createEngine())

app.get("/",(req, res) =>{
	res.send("99 Bottles of beer on the wall")
});

// app.get("/:numberOfBottles", (req, res) =>{
//   let bottles = req.params.numberOfBottles || 99
//   let next = bottles -1
//   res.render("index", {bottles, next})
// })





app.listen(PORT,() =>{
  console.log('We are in the building', PORT)
})
