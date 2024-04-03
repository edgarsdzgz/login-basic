import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome!');
})

app.get('/users/:id', (req: Request, res: Response) => {
  res.send(`You are looking at user with ID: ${req.params.id}`);
})

app.post('/create', (req: Request, res: Response) => {
  console.log(req.body);
  res.send({
    data: req.body,
  })
})

// Start listening for requests on this express app server
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`The server is listening on port ${port}`));