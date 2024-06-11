import express from 'express';

const app = express();
const port = 3000;

app.get('/nombre', (req, res) => {
  setTimeout(() => {
    res.send('Juan')
  }, 3000)
})

app.get('/nombre', (req, res) => {
  setTimeout(() => {
    res.send('Perez')
  }, 2000)
})

app.get('/ciudad', (req, res) => {
  setTimeout(() => {
    res.send('Madrid');
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});