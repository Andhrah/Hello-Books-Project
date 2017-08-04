import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const router = express.Router();
const port =  3002;

// make request body JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// route every call to the api through the router
app.use('/api', router);

app.use('*', (req, res) => {
    res.send('Welcome to my app');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App running at http://localhost:${port}`);
  }
});