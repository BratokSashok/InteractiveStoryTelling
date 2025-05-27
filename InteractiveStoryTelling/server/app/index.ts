import express from 'express';
import cors from 'cors';
import { errorHandler } from '../shared/middleware/errorHandler';
import registrationRoutes from '../features/auth/routes/registration.routes';
import reviewRoutes from '../entities/review/routes/review.routes';
import tagsRouter from '../entities/tags/routes/tag.routes';
import storiesRouter from '../entities/story/routes/stories.routes';
// import LoginRouter from '../features/auth/routes/login.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);//глобальная обработка ошибок 

// Роуты
app.use('/api/reviews', reviewRoutes);
app.use('/api/registration', registrationRoutes);
app.use('/api/tags', tagsRouter);
app.use('/api/stories', storiesRouter);



export default app;