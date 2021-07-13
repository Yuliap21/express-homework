const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/greeting/', (req, res) => {
  res.send('Hello, Stranger');
});


app.get('/hello/:name', (req, res) => {
	console.log(req.params);
	res.send('Hello ' + req.params.name);
});




app.listen(PORT,() =>{
  console.log('We are in the building', PORT)
})
