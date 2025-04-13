import {  Request, Response } from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

const express = require('express');
const app = express();

dotenv.config();
const port = process.env.PORT || 3001; 

app.use(cors()); 

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: 'Успешный вход!', token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Неверный email или пароль' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
