const express = require ('express');
const app = express();
const PORT = 3000;

app.get('/greeting/', (req, res) => {
  res.send('<h1>Hello, Stranger</h1>');
});

app.get('/hello/:firstName/:lastName', (req, res) => {
  console.log(req.params);
  res.send(`hello ${req.params.firstName} ${req.params.lastName}`)
});

app.get("/",(req, res) =>{
	res.send("hello! please type tip")
});
//
// app.get('/tip/:total/:tipPercentage', (req, res) =>{
//   tip = (req.params.tip); // total *
//   total = parseInt(req.params.total);
//   tipPercentage = parseInt(req.params.tipPercentage);
//   res.send(tip);
// });



app.listen(PORT,() =>{
  console.log('We are in the building', PORT)
})
