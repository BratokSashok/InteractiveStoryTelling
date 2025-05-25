import express from 'express';
import cors from 'cors';
import { errorHandler } from '../shared/middleware/errorHandler';
import registrationRoutes from '../features/auth/routes/registration.routes';
import reviewRoutes from '../entities/review/routes/review.routes';
import tagsRouter from '../entities/tags/routes/tag.routes';
// import LoginRouter from '../features/auth/routes/login.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Роуты
app.use('/api/reviews', reviewRoutes);
app.use('/api/registration', registrationRoutes);
// app.use('/api/login', LoginRouter)
app.use('/api/tags', tagsRouter)

// Middleware - глобальная обработка ошибок 
app.use(errorHandler);

export default app;