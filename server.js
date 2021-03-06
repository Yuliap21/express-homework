const express = require ('express');
const app = express();
const PORT = 3000;

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

// app.get('/greeting/', (req, res) => {
//   res.send('<h1>Hello, Stranger</h1>');
// });
//
// app.get('/hello/:firstName/:lastName', (req, res) => {
//   console.log(req.params);
//   res.send(`hello ${req.params.firstName} ${req.params.lastName}`)
// });

app.get("/",(req, res) =>{
	res.send("hello! please type tip")
});

app.get('/tip/:total/:tipPercentage', (req, res) =>{
  let tip;
  const total = parseInt(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage /100);
  tip = total * tipPercentage ;
  res.send(tip.toString());
});




app.get('/magic', (req, res) =>{
  res.send(`
    Will I be a Millionaire?`);
});

// app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) =>{
//   res.send(["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]);
//
// });

app.get('/magic/:responses', (req, res) =>{
  res.send(responses[Math.floor(Math.random() * responses.length)]);
});

app.get('/magic', (req, res) =>{
  res.redirect('/magic');
});




app.listen(PORT,() =>{
  console.log('We are in the building', PORT)
})
