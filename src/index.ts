import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome!');
})

// Start listening for requests on this express app server
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`The server is listening on port ${port}`));