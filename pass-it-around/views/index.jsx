

app.get("/:numberOfBottles", (req, res) =>{
  let bottles = req.params.numberOfBottles || 99
  let next = bottles -1
  res.render("index", {bottles, next})
})
