const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))


app.get('/hello', (req, res) => {
  res.send('<h1>Jou Jou</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Frank',
    age: 6,
    weight: 5,
  };
  res.json(cat);
});