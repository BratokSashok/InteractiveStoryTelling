const express = require('express');
import { Product } from './models/Product';


const app = express();
const port = 3001;

// Эндпоинт для JSON-ответа
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

sequelize.sync().then(() => {
  console.log('📦 DB connected & models synced');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

